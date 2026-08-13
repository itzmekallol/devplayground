export type FileNode = {
  id: string;
  name: string;
  kind: "file";
  language: string;
  content: string;
};

export type FolderNode = {
  id: string;
  name: string;
  kind: "folder";
  children: TreeNode[];
  isOpen?: boolean;
};

export type TreeNode = FileNode | FolderNode;

export type OpenTab = {
  fileId: string;
  isDirty: boolean;
};

export type ConsoleLevel = "log" | "info" | "warn" | "error";

export type ConsoleEntry = {
  id: string;
  level: ConsoleLevel;
  args: string[];
  timestamp: number;
};
