"use client";

import { Logo } from "./logo";
import { motion } from "framer-motion";
import MenuNew from "./ui/menu-new";

export function MiniHeader() {
  return (
    <motion.header className="lg:hidden w-full fixed left-0 right-0 z-30 bg-background-highlights transition-colors duration-700 border-b-[1px] border-invert-accent-hightlights">
      <div className="h-[20px]" />
      <div className="ml-6">
      <Logo />
      </div>
      <MenuNew />
      <div className="h-6" />
    </motion.header>
  );
}
