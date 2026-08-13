"use client";

import { Files, Search, GitBranch, Settings } from "lucide-react";
import clsx from "clsx";

export type SidebarView = "explorer" | "search";

export default function ActivityBar({
  view,
  onChange,
}: {
  view: SidebarView;
  onChange: (view: SidebarView) => void;
}) {
  const items: { id: SidebarView; icon: typeof Files; label: string }[] = [
    { id: "explorer", icon: Files, label: "Explorer" },
    { id: "search", icon: Search, label: "Search across files" },
  ];

  return (
    <div className="w-11 shrink-0 bg-bg-panel border-r border-border flex flex-col items-center py-2 gap-1">
      {items.map((item) => (
        <button
          key={item.id}
          title={item.label}
          onClick={() => onChange(item.id)}
          className={clsx(
            "w-9 h-9 flex items-center justify-center rounded-md",
            view === item.id
              ? "text-accent bg-accent/10"
              : "text-muted hover:text-text hover:bg-white/[0.05]",
          )}
        >
          <item.icon size={18} strokeWidth={1.6} />
        </button>
      ))}
      <div className="flex-1" />
      <button
        title="Git (not connected)"
        disabled
        className="w-9 h-9 flex items-center justify-center rounded-md text-muted/40 cursor-not-allowed"
      >
        <GitBranch size={18} strokeWidth={1.6} />
      </button>
      <button
        title="Settings"
        disabled
        className="w-9 h-9 flex items-center justify-center rounded-md text-muted/40 cursor-not-allowed mb-1"
      >
        <Settings size={18} strokeWidth={1.6} />
      </button>
    </div>
  );
}
