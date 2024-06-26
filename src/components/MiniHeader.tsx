"use client";

import { motion } from "framer-motion";
import { Logo } from "./Logo";
import MobileMenu from "./mobile/MobileMenu";

export function MiniHeader() {
  return (
    <motion.header className="lg:hidden w-full fixed left-0 right-0 z-30 bg-background-highlights transition-colors duration-700 border-b-[1px] border-invert-accent-hightlights">
      <div className="h-[20px]" />
      <div className="ml-6">
      <Logo />
      </div>
      <MobileMenu />
      <div className="h-6" />
    </motion.header>
  );
}
