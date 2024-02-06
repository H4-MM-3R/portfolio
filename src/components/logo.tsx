import { fontMono } from "@/lib/fonts";
import clsx from "clsx";
import { TerminalIcon } from "lucide-react";
import Link from "next/link";

export function Logo() {
    return (
      <Link href="/" className="flex items-center space-x-2">
        <TerminalIcon className="h-5 w-5" />
        <span className={clsx(fontMono.className, "inline-block font-bold text-xl")}>Hemram</span>
      </Link>
)
}
