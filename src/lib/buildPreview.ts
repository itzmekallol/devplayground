import { FileNode } from "@/types";
import { marked } from "marked";

const CONSOLE_BRIDGE = `
<script>
(function () {
  const send = (level, args) => {
    try {
      window.parent.postMessage(
        {
          source: "codeforge-preview",
          type: "console",
          level,
          args: args.map((a) => {
            try {
              if (a instanceof Error) return a.stack || a.message;
              if (typeof a === "object") return JSON.stringify(a, null, 2);
              return String(a);
            } catch (e) {
              return String(a);
            }
          }),
        },
        "*"
      );
    } catch (e) {}
  };
  ["log", "info", "warn", "error"].forEach((level) => {
    const original = console[level];
    console[level] = function (...args) {
      send(level, args);
      original.apply(console, args);
    };
  });
  window.addEventListener("error", (e) => {
    send("error", [e.message + " (" + e.filename + ":" + e.lineno + ")"]);
  });
  window.addEventListener("unhandledrejection", (e) => {
    send("error", ["Unhandled promise rejection: " + e.reason]);
  });
})();
</script>
`;

function findFileByRelativeName(
  files: FileNode[],
  name: string,
): FileNode | undefined {
  const clean = name.replace(/^\.\//, "");
  return files.find((f) => f.name === clean);
}

/**
 * Builds a single self-contained HTML document from the entry file, inlining
 * any local <link rel="stylesheet"> and <script src> references that match
 * files sitting alongside the entry file in the virtual file system.
 */
export function buildPreviewDocument(
  entryFile: FileNode,
  siblingFiles: FileNode[],
): string {
  let html = entryFile.content;

  // Inline local stylesheets: <link rel="stylesheet" href="style.css">
  html = html.replace(
    /<link[^>]+rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*>/gi,
    (match, href: string) => {
      if (/^https?:\/\//i.test(href)) return match;
      const file = findFileByRelativeName(siblingFiles, href);
      if (!file) return match;
      return `<style data-source="${file.name}">\n${file.content}\n</style>`;
    },
  );

  // Inline local scripts: <script src="script.js"></script>
  html = html.replace(
    /<script[^>]+src=["']([^"']+)["'][^>]*>\s*<\/script>/gi,
    (match, src: string) => {
      if (/^https?:\/\//i.test(src)) return match;
      const file = findFileByRelativeName(siblingFiles, src);
      if (!file) return match;
      return `<script data-source="${file.name}">\n${file.content}\n</script>`;
    },
  );

  if (html.includes("<head>")) {
    html = html.replace("<head>", `<head>${CONSOLE_BRIDGE}`);
  } else {
    html = CONSOLE_BRIDGE + html;
  }

  return html;
}

/**
 * Renders a Markdown file to a standalone, styled HTML document for the
 * preview pane (used for README.md and other .md files).
 */
export function buildMarkdownDocument(file: FileNode): string {
  const body = marked.parse(file.content, { async: false }) as string;
  return `<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>${file.name}</title>
    <style>
      body {
        margin: 0;
        padding: 32px 40px;
        max-width: 780px;
        margin: 0 auto;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, sans-serif;
        color: #1f2328;
        line-height: 1.6;
      }
      h1, h2, h3 { border-bottom: 1px solid #eaeaea; padding-bottom: 6px; }
      code { background: #f3f4f6; padding: 2px 5px; border-radius: 4px; font-size: 0.9em; }
      pre { background: #0d1117; color: #e6edf3; padding: 14px 16px; border-radius: 8px; overflow: auto; }
      pre code { background: none; padding: 0; }
      a { color: #4da3ff; }
      blockquote { border-left: 3px solid #d0d7de; margin: 0; padding-left: 14px; color: #57606a; }
      table { border-collapse: collapse; }
      th, td { border: 1px solid #d0d7de; padding: 6px 10px; }
    </style>
  </head>
  <body>${body}</body>
</html>`;
}
