"use client";

import dynamic from "next/dynamic";
import { useIDEStore, useActiveFile } from "@/lib/store";
import { FileCode2 } from "lucide-react";

const Monaco = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => (
    <div className="flex-1 flex items-center justify-center text-muted text-sm">
      Loading editor…
    </div>
  ),
});

export default function EditorPane() {
  const activeFile = useActiveFile();
  const updateFileContent = useIDEStore((s) => s.updateFileContent);
  const theme = useIDEStore((s) => s.theme);

  if (!activeFile) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-3 text-muted">
        <FileCode2 size={40} strokeWidth={1.2} />
        <p className="text-sm">Select a file to start editing</p>
        <p className="text-xs text-muted/70">
          Press{" "}
          <kbd className="px-1.5 py-0.5 rounded bg-bg-elevated border border-border">
            Ctrl/Cmd + K
          </kbd>{" "}
          for the command palette
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 min-h-0">
      <Monaco
        key={activeFile.id}
        language={activeFile.language}
        value={activeFile.content}
        theme={theme === "dark" ? "vs-dark" : "light"}
        onChange={(value) => updateFileContent(activeFile.id, value ?? "")}
        options={{
          fontSize: 13,
          fontFamily: "JetBrains Mono, Fira Code, monospace",
          minimap: { enabled: true },
          smoothScrolling: true,
          scrollBeyondLastLine: false,
          padding: { top: 12 },
          automaticLayout: true,
          tabSize: 2,
        }}
      />
    </div>
  );
}
