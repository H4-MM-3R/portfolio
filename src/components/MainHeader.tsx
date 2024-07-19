import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import React from "react";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import { ThemeToggle } from "./theme/ThemeToggle";

export default function MainHeader() {
  return (
    <motion.header className="w-screen items-center justify-center fixed top-8 z-40 hidden lg:flex">
      <div className="bg-background relative border-text border-[2px] w-[80vw] rounded-full transition-colors duration-700 mr-[20px]">
        <div className="flex h-16 items-center justify-between mx-8">
          <Logo />
            <Navbar items={siteConfig.mainNav} />
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
