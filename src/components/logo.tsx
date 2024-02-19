"use client";

import { fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { TerminalIcon } from "lucide-react";
import Link from "next/link";

export function Logo() {
    return (
      <Link href="/" className="flex items-center space-x-2 transition-all duration-500">
        <TerminalIcon className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className={cn(fontMono.className, "inline-block font-bold text-md sm:text-xl ")}>Hemram</span>
      </Link>
)
}
