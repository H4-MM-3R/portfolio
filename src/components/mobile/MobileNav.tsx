import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { links, menuItems, menuLogo, menuResume } from "@/config/mobile";
import { usePathname } from "next/navigation";
import { fontBitMap, fontMono } from "@/lib/fonts";
import { ThemeToggle } from "../theme/ThemeToggle";

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
        "flex flex-col justify-around px-[40px] pb-[50px] h-full relative overflow-hidden",
      )}
    >
      <motion.div
        variants={menuLogo}
        animate={isActive ? "open" : "closed"}
        className="mb-2"
      >
        <ThemeToggle />
      </motion.div>
      {links.map((link, i) => {
        const { title, href } = link;
        return (
          <motion.div
            key={i}
            custom={i}
            variants={menuItems}
            animate={isActive ? "open" : "closed"}
            className="flex gap-[2px] flex-col"
          >
            <Link
              href={href}
              className={cn(
                fontMono.className,
                "text-xl w-fit ",
                path === href
                  ? "text-invert-accent-hightlights font-bold transition-colors duration-700"
                  : "text-text-secondary transition-colors duration-700",
              )}
              onClick={() => setIsActive(!isActive)}
            >
              {title}
            </Link>
          </motion.div>
        );
      })}
      <motion.div
        variants={menuResume}
        animate={isActive ? "open" : "closed"}
        className="flex items-center mt-4"
      >
        <motion.button
          whileTap={{ y: 0, x: 0 }}
          initial={{ y: -7, x: -7 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="z-10"
        >
          <Link 
          target="_blank"
          href="https://drive.google.com/file/d/16T02-bVEIz6guMlm2kYOdpGTdP84ObTE/view?usp=drivesdk">
            <span
              className={cn(
                fontBitMap.className,
                "text-invert-accent-hightlights bg-background-highlights outline outline-text-emphasis p-4 transition-colors duration-700",
              )}
            >
              Resume
            </span>
          </Link>
        </motion.button>
        <div className="absolute h-[43px] w-[125px] bg-invert-accent-hightlights z-0 outline outline-invert-accent-hightlights transition-colors duration-700" />
      </motion.div>
    </div>
  );
}
