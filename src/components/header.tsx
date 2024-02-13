"use client";

import { siteConfig } from "@/config/site";
import { Nav } from "./nav";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { motion } from "framer-motion";
import { fontBitMap } from "@/lib/fonts";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <motion.header className="w-full flex items-center justify-center fixed top-8 left-0 right-0 z-[100] shadow-white">
      <div className="dark:bg-background bg-white relative border-[2px] w-[800px] rounded-full ">
        <div className="flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 mx-8">
          <Logo />
          <Nav items={siteConfig.mainNav} />
          <Link href="https://drive.google.com/file/d/16T02-bVEIz6guMlm2kYOdpGTdP84ObTE/view?usp=drivesdk" target="_blank" >
            <motion.button
              animate={{ scale: 1 }}
              whileHover={{ scaleX: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="dark:bg-border bg-border dark:text-foreground text-foreground rounded-full px-6 py-2  overflow-hidden transition-colors duration-500"
            >
              <span className={cn(fontBitMap.className, "text-xs uppercase")}>
                Resume
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
      <div className="pl-12">
        <ThemeToggle />
      </div>
    </motion.header>
  );
}
