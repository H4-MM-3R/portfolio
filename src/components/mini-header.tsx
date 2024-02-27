"use client";

import { siteConfig } from "@/config/site";
import { Nav } from "./nav";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { motion } from "framer-motion";
import { fontBitMap } from "@/lib/fonts";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { MenuToggle } from "./menu-toggle";

export function HeaderMini() {
    return (
        <motion.header className="lg:hidden w-full fixed left-0 right-0 z-50 bg-background-highlights">
        <div className="h-6" />
            <div className="relative flex justify-around items-center">
                <MenuToggle items={siteConfig.mainNav} />
                <Logo />
                <ThemeToggle />
            </div>
        <div className="h-6" />
        </motion.header>
    );
}
