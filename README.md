# CodeForge — Browser IDE

A VS Code-style IDE that runs entirely in your browser: file explorer, Monaco
editor, live preview and console. Rebuilt with **Next.js (App Router)**,
**React**, **TypeScript**, and **Tailwind CSS**.

## Features

- **Explorer** — create, rename, delete files/folders in an in-memory virtual
  file system.
- **Monaco editor** — full VS Code editing experience with syntax
  highlighting, tabs, and dirty-state indicators.
- **Live preview** — `src/index.html` (plus any linked local CSS/JS) renders
  live in a sandboxed iframe as you type / on Run.
- **Console** — `console.log/info/warn/error` and runtime errors from the
  preview are captured and streamed into a console panel.
- **Command palette** — `Ctrl/Cmd + K` for quick actions and fuzzy file
  search. `Ctrl/Cmd + S` to save, `Ctrl/Cmd + Shift + S` to save all.
- **Search across files**, theme toggle (dark/light), and toggleable
  explorer / preview / console panels.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/                 Next.js App Router entry (layout, page, globals.css)
  components/          IDE shell, editor, explorer, preview, console, etc.
  lib/                 Virtual file-system utilities, zustand store, preview
                        bundler
  types/               Shared TypeScript types
```

## Notes

This is a fresh, from-scratch implementation built to match the feature set
and visual language of the original CodeForge app (VS Code-style dark theme,
Monaco editor, live preview, console, command palette). The virtual file
system lives in memory for the session; wire it up to `localStorage`, a
backend API, or a Node.js file-system service if you need persistence across
reloads.
