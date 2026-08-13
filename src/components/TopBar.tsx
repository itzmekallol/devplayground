"use client";

import {
  Play,
  Save,
  Sun,
  Moon,
  PanelLeftClose,
  PanelLeft,
  PanelRightClose,
  PanelRight,
  SquareTerminal,
  Command as CommandIcon,
  Boxes,
} from "lucide-react";
import { useIDEStore } from "@/lib/store";

function IconButton({
  onClick,
  title,
  active,
  children,
}: {
  onClick: () => void;
  title: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      title={title}
      onClick={onClick}
      className={
        "p-1.5 rounded-md hover:bg-white/10 transition-colors " +
        (active ? "text-accent" : "text-muted hover:text-text")
      }
    >
      {children}
    </button>
  );
}

export default function TopBar() {
  const theme = useIDEStore((s) => s.theme);
  const toggleTheme = useIDEStore((s) => s.toggleTheme);
  const showExplorer = useIDEStore((s) => s.showExplorer);
  const toggleExplorer = useIDEStore((s) => s.toggleExplorer);
  const showPreview = useIDEStore((s) => s.showPreview);
  const togglePreview = useIDEStore((s) => s.togglePreview);
  const showConsole = useIDEStore((s) => s.showConsole);
  const toggleConsole = useIDEStore((s) => s.toggleConsole);
  const runProject = useIDEStore((s) => s.runProject);
  const saveActiveFile = useIDEStore((s) => s.saveActiveFile);
  const setCommandPaletteOpen = useIDEStore((s) => s.setCommandPaletteOpen);

  return (
    <div className="h-11 shrink-0 flex items-center justify-between px-3 bg-bg-panel border-b border-border">
      <div className="flex items-center gap-2 min-w-0">
        <Boxes size={18} className="text-accent shrink-0" />
        <span className="text-sm font-semibold text-text tracking-tight">
          CodeForge
        </span>
        <span className="hidden sm:inline text-[11px] text-muted ml-2 truncate">
          Browser IDE
        </span>
      </div>

      <div className="flex items-center gap-0.5 sm:gap-1">
        <button
          onClick={runProject}
          title="Run project"
          className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-md bg-accent text-bg text-xs font-semibold hover:bg-accent-soft"
        >
          <Play size={13} fill="currentColor" />{" "}
          <span className="hidden sm:inline">Run</span>
        </button>
        <IconButton title="Save active file" onClick={saveActiveFile}>
          <Save size={16} />
        </IconButton>

        <div className="w-px h-5 bg-border mx-0.5 sm:mx-1" />

        <IconButton
          title="Toggle explorer"
          active={showExplorer}
          onClick={toggleExplorer}
        >
          {showExplorer ? <PanelLeftClose size={16} /> : <PanelLeft size={16} />}
        </IconButton>
        <div className="hidden sm:contents">
          <IconButton
            title="Toggle preview pane"
            active={showPreview}
            onClick={togglePreview}
          >
            {showPreview ? (
              <PanelRightClose size={16} />
            ) : (
              <PanelRight size={16} />
            )}
          </IconButton>
          <IconButton
            title="Toggle console"
            active={showConsole}
            onClick={toggleConsole}
          >
            <SquareTerminal size={16} />
          </IconButton>
        </div>

        <div className="hidden sm:block w-px h-5 bg-border mx-1" />

        <IconButton title="Toggle theme" onClick={toggleTheme}>
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </IconButton>
        <button
          title="Command palette"
          onClick={() => setCommandPaletteOpen(true)}
          className="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-muted hover:text-text hover:bg-white/10 text-xs"
        >
          <CommandIcon size={13} />
          <span className="hidden md:inline">K</span>
        </button>
      </div>
    </div>
  );
}
