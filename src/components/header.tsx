"use client";

import { motion } from "framer-motion";
import MainHeader from "./main-header";
import { HeaderMini } from "./mini-header";

export function Header() {
  return (
    <motion.header className="w-screen items-center justify-center fixed top-8 z-40 hidden lg:flex">
      <MainHeader />
      
    </motion.header>
  );
}
