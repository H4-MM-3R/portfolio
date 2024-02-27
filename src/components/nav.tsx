"use client";

import { fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { MainNavProps } from "@/types/nav";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav({ items }: MainNavProps) {
  const currentRoute = usePathname() || "/";

  return (
    <nav className="flex gap-12">
      {items?.map((item) => (
        <Link
          className={cn(
            fontMono.className,
            "relative",
            `${item.href === currentRoute ? "text-cyan font-black" : "text-text-secondary"}`,
          )}
          href={item.href}
          key={item.href.toString()}
        >
          {item.href === currentRoute && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 top-full block h-[2px] w-full bg-cyan"
            />
          )}
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
