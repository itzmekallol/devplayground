"use client";

import { useMemo } from "react";
import { SearchX, Search as SearchIcon } from "lucide-react";
import { useIDEStore, useAllFiles } from "@/lib/store";

type Match = {
  fileId: string;
  fileName: string;
  lineNumber: number;
  lineText: string;
};

export default function SearchPanel() {
  const query = useIDEStore((s) => s.searchQuery);
  const setSearchQuery = useIDEStore((s) => s.setSearchQuery);
  const openFile = useIDEStore((s) => s.openFile);
  const files = useAllFiles();

  const matches = useMemo<Match[]>(() => {
    if (!query.trim()) return [];
    const needle = query.toLowerCase();
    const results: Match[] = [];
    for (const file of files) {
      const lines = file.content.split("\n");
      lines.forEach((line, idx) => {
        if (line.toLowerCase().includes(needle)) {
          results.push({
            fileId: file.id,
            fileName: file.name,
            lineNumber: idx + 1,
            lineText: line.trim().slice(0, 140),
          });
        }
      });
    }
    return results.slice(0, 200);
  }, [query, files]);

  return (
    <div className="flex flex-col h-full">
      <div className="px-2 pt-2 pb-1">
        <span className="text-[11px] font-semibold tracking-wider text-muted uppercase px-1">
          Search
        </span>
        <div className="mt-2 flex items-center gap-2 bg-bg-elevated border border-border rounded-md px-2 py-1.5">
          <SearchIcon size={13} className="text-muted shrink-0" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search across files"
            className="w-full bg-transparent text-[13px] text-text placeholder:text-muted outline-none"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-1 py-1">
        {query.trim() && matches.length === 0 && (
          <div className="flex flex-col items-center gap-2 text-muted mt-10 px-4 text-center">
            <SearchX size={20} />
            <p className="text-xs">No results for &ldquo;{query}&rdquo;</p>
          </div>
        )}
        {matches.map((m, i) => (
          <button
            key={`${m.fileId}-${m.lineNumber}-${i}`}
            onClick={() => openFile(m.fileId)}
            className="w-full text-left px-2 py-1.5 rounded-md hover:bg-white/[0.05] group"
          >
            <div className="flex items-center gap-1.5 text-[12px] text-text-dim group-hover:text-text">
              <span className="font-medium">{m.fileName}</span>
              <span className="text-muted">:{m.lineNumber}</span>
            </div>
            <div className="text-[12px] font-mono text-muted truncate pl-0.5">
              {m.lineText || <span className="italic">(empty line)</span>}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
