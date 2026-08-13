"use client";

import { useState } from "react";
import { useIDEStore } from "@/lib/store";
import ActivityBar, { SidebarView } from "@/components/ActivityBar";
import FileTree from "@/components/FileTree";
import SearchPanel from "@/components/SearchPanel";
import TabBar from "@/components/TabBar";
import EditorPane from "@/components/EditorPane";
import PreviewPanel from "@/components/PreviewPanel";
import ConsolePanel from "@/components/ConsolePanel";
import TopBar from "@/components/TopBar";
import StatusBar from "@/components/StatusBar";
import CommandPalette from "@/components/CommandPalette";

export default function IDE() {
  const showExplorer = useIDEStore((s) => s.showExplorer);
  const showPreview = useIDEStore((s) => s.showPreview);
  const showConsole = useIDEStore((s) => s.showConsole);
  const toggleExplorer = useIDEStore((s) => s.toggleExplorer);
  const [sidebarView, setSidebarView] = useState<SidebarView>("explorer");
  const [mobileTab, setMobileTab] = useState<"code" | "preview">("code");

  return (
    <div className="h-[100dvh] w-screen flex flex-col bg-bg text-text font-sans overflow-hidden">
      <TopBar />

      <div className="flex flex-1 min-h-0 relative">
        {showExplorer && (
          <>
            <div
              onClick={toggleExplorer}
              className="fixed inset-0 z-30 bg-black/50 md:hidden"
            />
            <div className="fixed inset-y-0 left-0 z-40 flex md:static md:z-auto">
              <ActivityBar view={sidebarView} onChange={setSidebarView} />
              <div className="w-64 max-w-[80vw] md:w-60 shrink-0 bg-bg-panel border-r border-border overflow-y-auto">
                {sidebarView === "explorer" ? <FileTree /> : <SearchPanel />}
              </div>
            </div>
          </>
        )}

        <div className="flex-1 min-w-0 flex flex-col md:flex-row">
          <div
            className={`flex-1 min-w-0 min-h-0 flex-col border-r border-border md:flex ${
              mobileTab === "code" ? "flex" : "hidden"
            }`}
          >
            <TabBar />
            <div className="flex-1 min-h-0 flex flex-col">
              <EditorPane />
              {showConsole && (
                <div className="h-40 md:h-56 shrink-0">
                  <ConsolePanel />
                </div>
              )}
            </div>
          </div>

          {showPreview && (
            <div
              className={`flex-1 min-h-0 md:flex-none md:w-[42%] md:min-w-[320px] shrink-0 md:flex md:flex-col ${
                mobileTab === "preview" ? "flex flex-col" : "hidden"
              }`}
            >
              <PreviewPanel />
            </div>
          )}
        </div>
      </div>

      {showPreview && (
        <div className="flex md:hidden border-t border-border bg-bg-panel shrink-0">
          <button
            onClick={() => setMobileTab("code")}
            className={`flex-1 py-2 text-xs font-medium ${
              mobileTab === "code" ? "text-accent" : "text-muted"
            }`}
          >
            Code
          </button>
          <button
            onClick={() => setMobileTab("preview")}
            className={`flex-1 py-2 text-xs font-medium ${
              mobileTab === "preview" ? "text-accent" : "text-muted"
            }`}
          >
            Preview
          </button>
        </div>
      )}

      <StatusBar />
      <CommandPalette />
    </div>
  );
}
