import { TreeNode } from "@/types";

export const defaultProject: TreeNode[] = [
  {
    id: "folder_src",
    name: "src",
    kind: "folder",
    isOpen: true,
    children: [
      {
        id: "file_index_html",
        name: "index.html",
        kind: "file",
        language: "html",
        content: `<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>CodeForge Preview</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main class="card">
      <h1>Hello, CodeForge 👋</h1>
      <p>Edit <code>src/index.html</code>, <code>style.css</code> or <code>script.js</code> and watch the preview update live.</p>
      <button id="btn">Click me</button>
      <p id="count">Clicked 0 times</p>
    </main>
    <script src="script.js"></script>
  </body>
</html>
`,
      },
      {
        id: "file_style_css",
        name: "style.css",
        kind: "file",
        language: "css",
        content: `body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at top, #1c2431, #0d1117);
  font-family: system-ui, sans-serif;
  color: #e6edf3;
}

.card {
  max-width: 420px;
  padding: 32px;
  border-radius: 16px;
  background: #161b22;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.06);
  text-align: center;
}

button {
  margin-top: 16px;
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  background: #4da3ff;
  color: #0d1117;
  font-weight: 600;
  cursor: pointer;
}

button:hover {
  background: #7cbcff;
}
`,
      },
      {
        id: "file_script_js",
        name: "script.js",
        kind: "file",
        language: "javascript",
        content: `let count = 0;
const btn = document.getElementById("btn");
const label = document.getElementById("count");

btn.addEventListener("click", () => {
  count += 1;
  label.textContent = \`Clicked \${count} times\`;
  console.log("Button clicked", count, "times");
});

console.log("script.js loaded");
`,
      },
    ],
  },
  {
    id: "file_readme",
    name: "README.md",
    kind: "file",
    language: "markdown",
    content: `# CodeForge

A VS Code-style IDE that runs entirely in your browser: file explorer, Monaco
editor, live preview and console.

- Edit files in the explorer on the left.
- The preview pane renders \`src/index.html\` live.
- Open the command palette with **Ctrl/Cmd + K**.
`,
  },
];

export const ENTRY_FILE_NAME = "index.html";
