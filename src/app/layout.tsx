"use client";

import "@/styles/globals.css";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Header } from "../components/header";
import { ThemeProvider } from "../components/theme-provider";
import { HeaderMini } from "../components/mini-header";
import TerminalIcon from "../components/terminal/terminal-icon";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background-highlights antialiased transition-colors duration-500 ",
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" enableSystem>
            <Header />
            <HeaderMini />
            {children}
            <TerminalIcon />
        </ThemeProvider>
      </body>
    </html>
  );
}
