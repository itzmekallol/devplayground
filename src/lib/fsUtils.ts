import { FileNode, FolderNode, TreeNode } from "@/types";

let counter = 0;
export function uid(prefix = "n"): string {
  counter += 1;
  return `${prefix}_${Date.now().toString(36)}_${counter.toString(36)}`;
}

export function languageForFileName(name: string): string {
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  const map: Record<string, string> = {
    js: "javascript",
    jsx: "javascript",
    ts: "typescript",
    tsx: "typescript",
    html: "html",
    css: "css",
    json: "json",
    md: "markdown",
    py: "python",
  };
  return map[ext] ?? "plaintext";
}

export function findNode(
  tree: TreeNode[],
  id: string,
): TreeNode | undefined {
  for (const node of tree) {
    if (node.id === id) return node;
    if (node.kind === "folder") {
      const found = findNode(node.children, id);
      if (found) return found;
    }
  }
  return undefined;
}

export function findFolder(
  tree: TreeNode[],
  id: string | null,
): FolderNode[] {
  // returns path of folders (not used everywhere, helper kept simple)
  return [];
}

export function updateNode(
  tree: TreeNode[],
  id: string,
  updater: (node: TreeNode) => TreeNode,
): TreeNode[] {
  return tree.map((node) => {
    if (node.id === id) return updater(node);
    if (node.kind === "folder") {
      return { ...node, children: updateNode(node.children, id, updater) };
    }
    return node;
  });
}

export function removeNode(tree: TreeNode[], id: string): TreeNode[] {
  return tree
    .filter((node) => node.id !== id)
    .map((node) =>
      node.kind === "folder"
        ? { ...node, children: removeNode(node.children, id) }
        : node,
    );
}

export function insertNode(
  tree: TreeNode[],
  parentId: string | null,
  newNode: TreeNode,
): TreeNode[] {
  if (parentId === null) return [...tree, newNode];
  return tree.map((node) => {
    if (node.id === parentId && node.kind === "folder") {
      return { ...node, children: [...node.children, newNode] };
    }
    if (node.kind === "folder") {
      return {
        ...node,
        children: insertNode(node.children, parentId, newNode),
      };
    }
    return node;
  });
}

export function flattenFiles(tree: TreeNode[]): FileNode[] {
  const out: FileNode[] = [];
  for (const node of tree) {
    if (node.kind === "file") out.push(node);
    else out.push(...flattenFiles(node.children));
  }
  return out;
}

export function newFile(name: string): FileNode {
  return {
    id: uid("file"),
    name,
    kind: "file",
    language: languageForFileName(name),
    content: "",
  };
}

export function newFolder(name: string): FolderNode {
  return {
    id: uid("folder"),
    name,
    kind: "folder",
    children: [],
    isOpen: true,
  };
}
