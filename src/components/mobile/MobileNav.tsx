import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect } from "react";
import { links, menuItems } from "@/config/mobile";
import { usePathname } from "next/navigation";
import { fontMono } from "@/lib/fonts";

export default function MobileNav({
  isActive,
  setIsActive,
  menuRef,
}: {
  isActive: any;
  setIsActive: any;
  menuRef: any;
}) {
  const path = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!menuRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };

    if (isActive) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isActive, setIsActive]);
  return (
    <div
      className={cn(
        "flex flex-col justify-around px-[40px] pb-[50px] h-full relative overflow-hidden",
      )}
      ref={menuRef}
    >
      <div className="mb-2" />

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
    </div>
  );
}
