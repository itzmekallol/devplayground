"use client";

import { X } from "lucide-react";
import clsx from "clsx";
import { useIDEStore } from "@/lib/store";
import { findNode } from "@/lib/fsUtils";

export default function TabBar() {
  const openTabs = useIDEStore((s) => s.openTabs);
  const activeFileId = useIDEStore((s) => s.activeFileId);
  const tree = useIDEStore((s) => s.tree);
  const setActiveFile = useIDEStore((s) => s.setActiveFile);
  const closeTab = useIDEStore((s) => s.closeTab);

  if (openTabs.length === 0) {
    return (
      <div className="h-9 flex items-center px-3 text-xs text-muted border-b border-border bg-bg-soft">
        No files open
      </div>
    );
  }

  return (
    <div className="flex items-stretch h-9 bg-bg-soft border-b border-border overflow-x-auto">
      {openTabs.map((tab) => {
        const node = findNode(tree, tab.fileId);
        if (!node) return null;
        const isActive = tab.fileId === activeFileId;
        return (
          <div
            key={tab.fileId}
            onClick={() => setActiveFile(tab.fileId)}
            className={clsx(
              "group flex items-center gap-2 px-3 text-[13px] border-r border-border cursor-pointer shrink-0",
              isActive
                ? "bg-bg text-text"
                : "text-text-dim hover:text-text hover:bg-white/[0.03]",
            )}
          >
            <span className="truncate max-w-[140px]">{node.name}</span>
            {tab.isDirty ? (
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            ) : (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeTab(tab.fileId);
                }}
                className="opacity-0 group-hover:opacity-100 hover:bg-white/10 rounded p-0.5 shrink-0"
              >
                <X size={12} />
              </button>
            )}
            {tab.isDirty && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeTab(tab.fileId);
                }}
                className="hidden group-hover:block hover:bg-white/10 rounded p-0.5 shrink-0"
              >
                <X size={12} />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
