import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeForge — Browser IDE",
  description:
    "CodeForge is a VS Code-style IDE that runs entirely in your browser: file explorer, Monaco editor, live preview and console.",
  openGraph: {
    title: "CodeForge — Browser IDE",
    description:
      "A VS Code-style IDE in your browser with live preview, console and command palette.",
  },
  icons: {
    icon: {
      url:
        "data:image/svg+xml," +
        encodeURIComponent(
          `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'><rect x='1.5' y='1.5' width='21' height='21' rx='5' stroke='%234da3ff' stroke-width='1.8'/><path d='M9.2 8.4 5.8 12l3.4 3.6M14.8 8.4l3.4 3.6-3.4 3.6' stroke='%234da3ff' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/></svg>`,
        ),
      type: "image/svg+xml",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
