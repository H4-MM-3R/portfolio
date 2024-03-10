"use client";

import { Logo } from "./logo";
import { motion } from "framer-motion";
import MenuNew from "./ui/menu-new";

export function HeaderMini() {
  return (
    <motion.header className="lg:hidden w-full fixed left-0 right-0 z-30 bg-background-highlights transition-colors duration-700">
      <div className="h-[30px]" />
      <div className="ml-6">
      <Logo />
      </div>
      <MenuNew />
      <div className="h-6" />
    </motion.header>
  );
}
