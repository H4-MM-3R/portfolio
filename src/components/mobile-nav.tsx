import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./theme-toggle";
import { links, menuItems, menuLogo } from "@/config/mobile";
import { usePathname } from "next/navigation";
import { fontGrot, fontMono } from "@/lib/fonts";

export default function MobileNav({
  isActive,
  setIsActive,
}: {
  isActive: any;
  setIsActive: any;
}) {

 const path = usePathname();
  return (
    <div
      className={cn(
        "flex flex-col justify-around px-[40px] pt-[14px] pb-[50px] h-full relative overflow-hidden",
      )}
    >
      <motion.div
        variants={menuLogo}
        animate={isActive ? "open" : "closed"}
        className="mb-8"
      >
        <ThemeToggle />
      </motion.div>
      {links.map((link, i) => {
        const { title, href } = link;
        return (
          <motion.div
            custom={i}
            variants={menuItems}
            animate={isActive ? "open" : "closed"}
            className="flex gap-[2px] flex-col"
          >
            <Link
              href={href}
              className={cn(fontMono.className, "text-xl w-fit", (path === href ? "text-invert-accent-hightlights font-bold border-b-2 border-invert-accent-hightlights": "text-text-secondary"))}
              onClick={() => setIsActive(!isActive)}
            >
              {title}
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
