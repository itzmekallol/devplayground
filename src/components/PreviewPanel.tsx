"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { RotateCw, ExternalLink, MonitorSmartphone } from "lucide-react";
import { useIDEStore, useAllFiles, useActiveFile } from "@/lib/store";
import { buildPreviewDocument, buildMarkdownDocument } from "@/lib/buildPreview";
import { ENTRY_FILE_NAME } from "@/lib/defaultProject";

export default function PreviewPanel() {
  const files = useAllFiles();
  const activeFile = useActiveFile();
  const previewToken = useIDEStore((s) => s.previewToken);
  const pushConsoleEntry = useIDEStore((s) => s.pushConsoleEntry);
  const [nonce, setNonce] = useState(0);
  const [narrow, setNarrow] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Prefer whichever file is currently open in the editor if it's directly
  // previewable (HTML or Markdown); otherwise fall back to the project's
  // index.html entry point.
  const previewFile = useMemo(() => {
    if (activeFile && (activeFile.language === "html" || activeFile.language === "markdown")) {
      return activeFile;
    }
    return files.find((f) => f.name === ENTRY_FILE_NAME);
  }, [activeFile, files]);

  const doc = useMemo(() => {
    if (!previewFile) return null;
    if (previewFile.language === "markdown") {
      return buildMarkdownDocument(previewFile);
    }
    return buildPreviewDocument(previewFile, files);
  }, [previewFile, files, previewToken, nonce]);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      const data = event.data;
      if (!data || data.source !== "codeforge-preview") return;
      if (data.type === "console") {
        pushConsoleEntry({
          level: data.level,
          args: data.args,
          timestamp: Date.now(),
        });
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [pushConsoleEntry]);

  return (
    <div className="flex flex-col h-full bg-bg">
      <div className="h-9 flex items-center justify-between px-3 border-b border-border bg-bg-soft shrink-0">
        <span className="text-[11px] font-semibold tracking-wider text-muted uppercase flex items-center gap-2">
          Preview
          {previewFile && (
            <span className="normal-case text-text-dim font-normal tracking-normal">
              {previewFile.name}
            </span>
          )}
        </span>
        <div className="flex items-center gap-1">
          <button
            title="Toggle narrow viewport"
            onClick={() => setNarrow((n) => !n)}
            className={
              "p-1 rounded hover:bg-white/10 " +
              (narrow ? "text-accent" : "text-muted hover:text-text")
            }
          >
            <MonitorSmartphone size={14} />
          </button>
          <button
            title="Refresh preview"
            onClick={() => setNonce((n) => n + 1)}
            className="p-1 rounded hover:bg-white/10 text-muted hover:text-text"
          >
            <RotateCw size={14} />
          </button>
          <button
            title="Open in new tab"
            disabled={!doc}
            onClick={() => {
              if (!doc) return;
              const blob = new Blob([doc], { type: "text/html" });
              const url = URL.createObjectURL(blob);
              window.open(url, "_blank");
            }}
            className="p-1 rounded hover:bg-white/10 text-muted hover:text-text disabled:opacity-40"
          >
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
      <div className="flex-1 min-h-0 overflow-auto bg-[#0a0e14] flex justify-center">
        {doc ? (
          <div
            className="h-full bg-white transition-all"
            style={{ width: narrow ? "375px" : "100%" }}
          >
            <iframe
              ref={iframeRef}
              key={`${previewToken}-${nonce}`}
              title="Live preview"
              srcDoc={doc}
              sandbox="allow-scripts allow-forms allow-modals allow-popups"
              className="w-full h-full border-0 bg-white"
            />
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted text-sm text-center px-4">
            Nothing to preview — open an{" "}
            <code className="mx-1 text-text-dim">.html</code> or{" "}
            <code className="mx-1 text-text-dim">.md</code> file, or add an{" "}
            <code className="mx-1 text-text-dim">index.html</code>
          </div>
        )}
      </div>
    </div>
  );
}
