"use client";

import { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  File,
  Folder,
  FolderOpen,
  FilePlus,
  FolderPlus,
  Trash2,
  Pencil,
} from "lucide-react";
import clsx from "clsx";
import { TreeNode } from "@/types";
import { useIDEStore } from "@/lib/store";

function iconForFile(name: string) {
  const ext = name.split(".").pop()?.toLowerCase();
  const color =
    ext === "html"
      ? "text-orange-400"
      : ext === "css"
      ? "text-sky-400"
      : ext === "js" || ext === "jsx"
      ? "text-yellow-400"
      : ext === "ts" || ext === "tsx"
      ? "text-blue-400"
      : ext === "json"
      ? "text-lime-400"
      : ext === "md"
      ? "text-muted"
      : "text-muted";
  return <File size={14} className={clsx("shrink-0", color)} />;
}

function NewItemInput({
  onSubmit,
  onCancel,
  depth,
}: {
  onSubmit: (name: string) => void;
  onCancel: () => void;
  depth: number;
}) {
  const [value, setValue] = useState("");
  return (
    <input
      autoFocus
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={() => (value.trim() ? onSubmit(value.trim()) : onCancel())}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          if (value.trim()) onSubmit(value.trim());
          else onCancel();
        }
        if (e.key === "Escape") onCancel();
      }}
      style={{ paddingLeft: `${depth * 14 + 26}px` }}
      className="w-full bg-bg-elevated text-sm text-text py-1 pr-2 outline outline-1 outline-accent rounded-sm"
      placeholder="name"
    />
  );
}

function TreeRow({ node, depth }: { node: TreeNode; depth: number }) {
  const [isRenaming, setIsRenaming] = useState(false);
  const [renameValue, setRenameValue] = useState(node.name);
  const [creating, setCreating] = useState<"file" | "folder" | null>(null);
  const [hovered, setHovered] = useState(false);

  const activeFileId = useIDEStore((s) => s.activeFileId);
  const openFile = useIDEStore((s) => s.openFile);
  const toggleFolder = useIDEStore((s) => s.toggleFolder);
  const renameNode = useIDEStore((s) => s.renameNode);
  const deleteNode = useIDEStore((s) => s.deleteNode);
  const createFile = useIDEStore((s) => s.createFile);
  const createFolder = useIDEStore((s) => s.createFolder);

  const isFile = node.kind === "file";
  const isActive = isFile && node.id === activeFileId;

  const commitRename = () => {
    setIsRenaming(false);
    if (renameValue.trim() && renameValue.trim() !== node.name) {
      renameNode(node.id, renameValue.trim());
    } else {
      setRenameValue(node.name);
    }
  };

  return (
    <div>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => (isFile ? openFile(node.id) : toggleFolder(node.id))}
        className={clsx(
          "group flex items-center gap-1 py-[3px] pr-1 cursor-pointer text-[13px] rounded-sm",
          isActive
            ? "bg-accent/15 text-text"
            : "text-text-dim hover:bg-white/[0.04] hover:text-text",
        )}
        style={{ paddingLeft: `${depth * 14 + 6}px` }}
      >
        {!isFile ? (
          node.isOpen ? (
            <ChevronDown size={13} className="shrink-0 text-muted" />
          ) : (
            <ChevronRight size={13} className="shrink-0 text-muted" />
          )
        ) : (
          <span className="w-[13px] shrink-0" />
        )}

        {!isFile ? (
          node.isOpen ? (
            <FolderOpen size={14} className="shrink-0 text-accent" />
          ) : (
            <Folder size={14} className="shrink-0 text-accent" />
          )
        ) : (
          iconForFile(node.name)
        )}

        {isRenaming ? (
          <input
            autoFocus
            value={renameValue}
            onChange={(e) => setRenameValue(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            onBlur={commitRename}
            onKeyDown={(e) => {
              if (e.key === "Enter") commitRename();
              if (e.key === "Escape") {
                setRenameValue(node.name);
                setIsRenaming(false);
              }
            }}
            className="flex-1 bg-bg-elevated text-text text-[13px] px-1 rounded-sm outline outline-1 outline-accent"
          />
        ) : (
          <span className="truncate flex-1">{node.name}</span>
        )}

        {hovered && !isRenaming && (
          <div className="flex items-center gap-1 shrink-0">
            {!isFile && (
              <>
                <button
                  title="New file"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!node.isOpen) toggleFolder(node.id);
                    setCreating("file");
                  }}
                  className="p-0.5 rounded hover:bg-white/10 text-muted hover:text-text"
                >
                  <FilePlus size={13} />
                </button>
                <button
                  title="New folder"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!node.isOpen) toggleFolder(node.id);
                    setCreating("folder");
                  }}
                  className="p-0.5 rounded hover:bg-white/10 text-muted hover:text-text"
                >
                  <FolderPlus size={13} />
                </button>
              </>
            )}
            <button
              title="Rename"
              onClick={(e) => {
                e.stopPropagation();
                setIsRenaming(true);
              }}
              className="p-0.5 rounded hover:bg-white/10 text-muted hover:text-text"
            >
              <Pencil size={12} />
            </button>
            <button
              title="Delete"
              onClick={(e) => {
                e.stopPropagation();
                if (confirm(`Delete "${node.name}"?`)) deleteNode(node.id);
              }}
              className="p-0.5 rounded hover:bg-white/10 text-muted hover:text-red-400"
            >
              <Trash2 size={12} />
            </button>
          </div>
        )}
      </div>

      {!isFile && node.isOpen && (
        <div>
          {node.children.map((child) => (
            <TreeRow key={child.id} node={child} depth={depth + 1} />
          ))}
          {creating && (
            <NewItemInput
              depth={depth + 1}
              onCancel={() => setCreating(null)}
              onSubmit={(name) => {
                if (creating === "file") createFile(node.id, name);
                else createFolder(node.id, name);
                setCreating(null);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default function FileTree() {
  const tree = useIDEStore((s) => s.tree);
  const createFile = useIDEStore((s) => s.createFile);
  const createFolder = useIDEStore((s) => s.createFolder);
  const [creatingRoot, setCreatingRoot] = useState<"file" | "folder" | null>(
    null,
  );

  return (
    <div className="select-none py-1">
      <div className="flex items-center justify-between px-2 py-1">
        <span className="text-[11px] font-semibold tracking-wider text-muted uppercase">
          Explorer
        </span>
        <div className="flex items-center gap-1">
          <button
            title="New file"
            onClick={() => setCreatingRoot("file")}
            className="p-0.5 rounded hover:bg-white/10 text-muted hover:text-text"
          >
            <FilePlus size={13} />
          </button>
          <button
            title="New folder"
            onClick={() => setCreatingRoot("folder")}
            className="p-0.5 rounded hover:bg-white/10 text-muted hover:text-text"
          >
            <FolderPlus size={13} />
          </button>
        </div>
      </div>
      {tree.map((node) => (
        <TreeRow key={node.id} node={node} depth={0} />
      ))}
      {creatingRoot && (
        <NewItemInput
          depth={0}
          onCancel={() => setCreatingRoot(null)}
          onSubmit={(name) => {
            if (creatingRoot === "file") createFile(null, name);
            else createFolder(null, name);
            setCreatingRoot(null);
          }}
        />
      )}
    </div>
  );
}
