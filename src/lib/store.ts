"use client";

import { create } from "zustand";
import { ConsoleEntry, FileNode, OpenTab, TreeNode } from "@/types";
import {
  findNode,
  flattenFiles,
  insertNode,
  languageForFileName,
  newFile,
  newFolder,
  removeNode,
  updateNode,
} from "@/lib/fsUtils";
import { defaultProject } from "@/lib/defaultProject";

type IDEState = {
  tree: TreeNode[];
  openTabs: OpenTab[];
  activeFileId: string | null;
  theme: "dark" | "light";
  showPreview: boolean;
  showConsole: boolean;
  showExplorer: boolean;
  commandPaletteOpen: boolean;
  searchQuery: string;
  consoleEntries: ConsoleEntry[];
  previewToken: number;
  lastSavedAt: number | null;

  openFile: (id: string) => void;
  closeTab: (id: string) => void;
  setActiveFile: (id: string) => void;
  updateFileContent: (id: string, content: string) => void;
  saveActiveFile: () => void;
  saveAllFiles: () => void;
  createFile: (parentId: string | null, name: string) => void;
  createFolder: (parentId: string | null, name: string) => void;
  renameNode: (id: string, name: string) => void;
  deleteNode: (id: string) => void;
  toggleFolder: (id: string) => void;
  toggleTheme: () => void;
  togglePreview: () => void;
  toggleConsole: () => void;
  toggleExplorer: () => void;
  setCommandPaletteOpen: (open: boolean) => void;
  setSearchQuery: (q: string) => void;
  pushConsoleEntry: (entry: Omit<ConsoleEntry, "id">) => void;
  clearConsole: () => void;
  runProject: () => void;
};

export const useIDEStore = create<IDEState>((set, get) => ({
  tree: defaultProject,
  openTabs: [{ fileId: "file_index_html", isDirty: false }],
  activeFileId: "file_index_html",
  theme: "dark",
  showPreview: true,
  showConsole: true,
  showExplorer: true,
  commandPaletteOpen: false,
  searchQuery: "",
  consoleEntries: [],
  previewToken: 0,
  lastSavedAt: null,

  openFile: (id) => {
    const { openTabs } = get();
    if (!openTabs.find((t) => t.fileId === id)) {
      set({ openTabs: [...openTabs, { fileId: id, isDirty: false }] });
    }
    set({ activeFileId: id });
  },

  closeTab: (id) => {
    const { openTabs, activeFileId } = get();
    const remaining = openTabs.filter((t) => t.fileId !== id);
    let nextActive = activeFileId;
    if (activeFileId === id) {
      nextActive = remaining.length
        ? remaining[remaining.length - 1].fileId
        : null;
    }
    set({ openTabs: remaining, activeFileId: nextActive });
  },

  setActiveFile: (id) => set({ activeFileId: id }),

  updateFileContent: (id, content) => {
    set((state) => ({
      tree: updateNode(state.tree, id, (node) =>
        node.kind === "file" ? { ...node, content } : node,
      ),
      openTabs: state.openTabs.map((t) =>
        t.fileId === id ? { ...t, isDirty: true } : t,
      ),
    }));
  },

  saveActiveFile: () => {
    const { activeFileId, openTabs } = get();
    if (!activeFileId) return;
    set({
      openTabs: openTabs.map((t) =>
        t.fileId === activeFileId ? { ...t, isDirty: false } : t,
      ),
      lastSavedAt: Date.now(),
      previewToken: get().previewToken + 1,
    });
  },

  saveAllFiles: () => {
    set((state) => ({
      openTabs: state.openTabs.map((t) => ({ ...t, isDirty: false })),
      lastSavedAt: Date.now(),
      previewToken: state.previewToken + 1,
    }));
  },

  createFile: (parentId, name) => {
    const file = newFile(name);
    set((state) => ({ tree: insertNode(state.tree, parentId, file) }));
    get().openFile(file.id);
  },

  createFolder: (parentId, name) => {
    const folder = newFolder(name);
    set((state) => ({ tree: insertNode(state.tree, parentId, folder) }));
  },

  renameNode: (id, name) => {
    set((state) => ({
      tree: updateNode(state.tree, id, (node) =>
        node.kind === "file"
          ? { ...node, name, language: languageForFileName(name) }
          : { ...node, name },
      ),
    }));
  },

  deleteNode: (id) => {
    set((state) => ({
      tree: removeNode(state.tree, id),
      openTabs: state.openTabs.filter((t) => t.fileId !== id),
      activeFileId:
        state.activeFileId === id ? null : state.activeFileId,
    }));
  },

  toggleFolder: (id) => {
    set((state) => ({
      tree: updateNode(state.tree, id, (node) =>
        node.kind === "folder" ? { ...node, isOpen: !node.isOpen } : node,
      ),
    }));
  },

  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
  togglePreview: () => set((state) => ({ showPreview: !state.showPreview })),
  toggleConsole: () => set((state) => ({ showConsole: !state.showConsole })),
  toggleExplorer: () =>
    set((state) => ({ showExplorer: !state.showExplorer })),
  setCommandPaletteOpen: (open) => set({ commandPaletteOpen: open }),
  setSearchQuery: (q) => set({ searchQuery: q }),

  pushConsoleEntry: (entry) =>
    set((state) => ({
      consoleEntries: [
        ...state.consoleEntries,
        { ...entry, id: `${Date.now()}_${Math.random().toString(36).slice(2)}` },
      ].slice(-500),
    })),

  clearConsole: () => set({ consoleEntries: [] }),

  runProject: () => {
    set((state) => ({
      previewToken: state.previewToken + 1,
      consoleEntries: [],
      showPreview: true,
    }));
  },
}));

export function useActiveFile(): FileNode | null {
  const tree = useIDEStore((s) => s.tree);
  const activeFileId = useIDEStore((s) => s.activeFileId);
  if (!activeFileId) return null;
  const node = findNode(tree, activeFileId);
  return node && node.kind === "file" ? node : null;
}

export function useAllFiles(): FileNode[] {
  const tree = useIDEStore((s) => s.tree);
  return flattenFiles(tree);
}
