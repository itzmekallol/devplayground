"use client";

import { useEffect, useRef } from "react";
import { Trash2, X } from "lucide-react";
import clsx from "clsx";
import { useIDEStore } from "@/lib/store";

const levelStyles: Record<string, string> = {
  log: "text-text-dim",
  info: "text-sky-400",
  warn: "text-amber-400",
  error: "text-red-400",
};

const levelPrefix: Record<string, string> = {
  log: ">",
  info: "i",
  warn: "!",
  error: "✕",
};

export default function ConsolePanel() {
  const entries = useIDEStore((s) => s.consoleEntries);
  const clearConsole = useIDEStore((s) => s.clearConsole);
  const toggleConsole = useIDEStore((s) => s.toggleConsole);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [entries.length]);

  return (
    <div className="flex flex-col h-full bg-bg-soft border-t border-border">
      <div className="h-8 flex items-center justify-between px-3 border-b border-border shrink-0">
        <span className="text-[11px] font-semibold tracking-wider text-muted uppercase">
          Console
        </span>
        <div className="flex items-center gap-1">
          <button
            title="Clear console"
            onClick={clearConsole}
            className="p-1 rounded hover:bg-white/10 text-muted hover:text-text"
          >
            <Trash2 size={13} />
          </button>
          <button
            title="Close console"
            onClick={toggleConsole}
            className="p-1 rounded hover:bg-white/10 text-muted hover:text-text"
          >
            <X size={13} />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex-1 overflow-auto px-3 py-2 font-mono text-[12.5px] leading-relaxed"
      >
        {entries.length === 0 && (
          <p className="text-muted/60 italic">
            Console output from the preview will appear here.
          </p>
        )}
        {entries.map((entry) => (
          <div
            key={entry.id}
            className={clsx(
              "flex gap-2 py-0.5 border-b border-border/40",
              levelStyles[entry.level],
            )}
          >
            <span className="opacity-60 select-none">
              {levelPrefix[entry.level]}
            </span>
            <span className="whitespace-pre-wrap break-all">
              {entry.args.join(" ")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
