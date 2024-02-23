"use client";

import { motion } from "framer-motion";
import MainHeader from "./main-header";

export function Header() {
  return (
    <motion.header className="hidden w-screen lg:flex items-center justify-center fixed top-8 z-40 ">
    <MainHeader />
    </motion.header>
  );
}
