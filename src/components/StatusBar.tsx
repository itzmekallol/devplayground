"use client";

import { GitBranch, CheckCircle2 } from "lucide-react";
import { useIDEStore, useActiveFile } from "@/lib/store";

export default function StatusBar() {
  const activeFile = useActiveFile();
  const lastSavedAt = useIDEStore((s) => s.lastSavedAt);
  const openTabs = useIDEStore((s) => s.openTabs);
  const activeFileId = useIDEStore((s) => s.activeFileId);
  const isDirty = openTabs.find((t) => t.fileId === activeFileId)?.isDirty;

  return (
    <div className="h-6 shrink-0 flex items-center justify-between px-2 sm:px-3 bg-accent-soft/90 text-[11px] text-bg font-medium overflow-hidden">
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <span className="flex items-center gap-1 shrink-0">
          <GitBranch size={11} /> main
        </span>
        <span className="flex items-center gap-1 truncate">
          <CheckCircle2 size={11} className="shrink-0" />
          <span className="truncate">
            {isDirty ? "Unsaved" : "Saved"}
          </span>
        </span>
      </div>
      <div className="hidden sm:flex items-center gap-3 shrink-0">
        {activeFile && (
          <>
            <span>{activeFile.language}</span>
            <span>UTF-8</span>
          </>
        )}
        {lastSavedAt && (
          <span className="opacity-80">
            Saved {new Date(lastSavedAt).toLocaleTimeString()}
          </span>
        )}
      </div>
    </div>
  );
}
