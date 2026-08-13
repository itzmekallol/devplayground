"use client";

import { useEffect } from "react";
import { Command } from "cmdk";
import {
  Save,
  SaveAll,
  Play,
  Sun,
  Moon,
  PanelRight,
  SquareTerminal,
  PanelLeft,
  FilePlus,
  File as FileIcon,
} from "lucide-react";
import { useIDEStore, useAllFiles } from "@/lib/store";

export default function CommandPalette() {
  const open = useIDEStore((s) => s.commandPaletteOpen);
  const setOpen = useIDEStore((s) => s.setCommandPaletteOpen);
  const saveActiveFile = useIDEStore((s) => s.saveActiveFile);
  const saveAllFiles = useIDEStore((s) => s.saveAllFiles);
  const runProject = useIDEStore((s) => s.runProject);
  const toggleTheme = useIDEStore((s) => s.toggleTheme);
  const togglePreview = useIDEStore((s) => s.togglePreview);
  const toggleConsole = useIDEStore((s) => s.toggleConsole);
  const toggleExplorer = useIDEStore((s) => s.toggleExplorer);
  const createFile = useIDEStore((s) => s.createFile);
  const openFile = useIDEStore((s) => s.openFile);
  const files = useAllFiles();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(!open);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        if (e.shiftKey) saveAllFiles();
        else saveActiveFile();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, setOpen, saveActiveFile, saveAllFiles]);

  const run = (fn: () => void) => {
    fn();
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center px-4 pt-[15vh]"
      onClick={() => setOpen(false)}
    >
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg sm:max-w-lg">
        <Command
          className="rounded-lg overflow-hidden border border-border bg-bg-elevated shadow-2xl"
          loop
        >
          <div className="flex items-center border-b border-border px-3">
            <Command.Input
              autoFocus
              placeholder="Type a command or search files…"
              className="w-full bg-transparent py-3 text-sm text-text placeholder:text-muted outline-none"
            />
          </div>
          <Command.List className="max-h-80 overflow-y-auto p-1.5">
            <Command.Empty className="py-6 text-center text-sm text-muted">
              No results found.
            </Command.Empty>

            <Command.Group
              heading="Actions"
              className="text-[11px] uppercase tracking-wider text-muted px-2 py-1.5 [&_[cmdk-group-heading]]:px-1.5"
            >
              <Command.Item
                onSelect={() => run(runProject)}
                className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-text cursor-pointer aria-selected:bg-accent/20"
              >
                <Play size={14} className="text-accent" /> Run project
              </Command.Item>
              <Command.Item
                onSelect={() => run(saveActiveFile)}
                className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-text cursor-pointer aria-selected:bg-accent/20"
              >
                <Save size={14} /> Save active file
              </Command.Item>
              <Command.Item
                onSelect={() => run(saveAllFiles)}
                className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-text cursor-pointer aria-selected:bg-accent/20"
              >
                <SaveAll size={14} /> Save all files
              </Command.Item>
              <Command.Item
                onSelect={() =>
                  run(() => {
                    const name = window.prompt("File name (e.g. utils.js)");
                    if (name) createFile(null, name);
                  })
                }
                className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-text cursor-pointer aria-selected:bg-accent/20"
              >
                <FilePlus size={14} /> New file
              </Command.Item>
              <Command.Item
                onSelect={() => run(toggleTheme)}
                className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-text cursor-pointer aria-selected:bg-accent/20"
              >
                <Sun size={14} /> <Moon size={14} className="-ml-1" /> Toggle
                theme
              </Command.Item>
              <Command.Item
                onSelect={() => run(toggleExplorer)}
                className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-text cursor-pointer aria-selected:bg-accent/20"
              >
                <PanelLeft size={14} /> Toggle explorer
              </Command.Item>
              <Command.Item
                onSelect={() => run(togglePreview)}
                className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-text cursor-pointer aria-selected:bg-accent/20"
              >
                <PanelRight size={14} /> Toggle preview pane
              </Command.Item>
              <Command.Item
                onSelect={() => run(toggleConsole)}
                className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-text cursor-pointer aria-selected:bg-accent/20"
              >
                <SquareTerminal size={14} /> Toggle console
              </Command.Item>
            </Command.Group>

            <Command.Group
              heading="Files"
              className="text-[11px] uppercase tracking-wider text-muted px-2 py-1.5 [&_[cmdk-group-heading]]:px-1.5"
            >
              {files.map((f) => (
                <Command.Item
                  key={f.id}
                  value={f.name}
                  onSelect={() => run(() => openFile(f.id))}
                  className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-text cursor-pointer aria-selected:bg-accent/20"
                >
                  <FileIcon size={14} className="text-muted" /> {f.name}
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
