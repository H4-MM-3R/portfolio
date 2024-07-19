"use client";

import "@/styles/globals.css";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import MainHeader from "../components/MainHeader";
import { MiniHeader } from "../components/MiniHeader";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import PageAnimatePresence from "../components/transitions/PageAnimatePresence";
import TerminalIcon from "../components/terminal/TerminalIcon";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background-highlights antialiased transition-colors duration-700 ",
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" enableSystem>
          <MainHeader />
          <MiniHeader />
          <PageAnimatePresence>
            {children}
          </PageAnimatePresence>
          <TerminalIcon />
        </ThemeProvider>
      </body>
    </html>
  );
}
