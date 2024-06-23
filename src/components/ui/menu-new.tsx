"use client";

import { motion } from "framer-motion";
import { MenuIcon, X } from "lucide-react";
import React from "react";
import MobileNav from "../mobile-nav";
import { menu } from "@/config/mobile";


export default function AwwwardsMenu() {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div>
      <div className="absolute top-[15px] right-[30px] z-40 rounded-3xl">
        <motion.div
          variants={menu}
          animate={isActive ? "open" : "closed"}
          initial="closed"
          className="w-[240px] h-[425px] bg-background rounded-3xl relative transition-colors duration-700"
        >
          <MobileNav isActive={isActive} setIsActive={setIsActive} />
        </motion.div>
        <button
          onClick={() => setIsActive(!isActive)}
          className="absolute top-0 right-0 w-[32px] h-[32px] flex justify-center items-center cursor-pointer rounded-3xl bg-background-highlights border-[2px] border-text-secondary overflow-hidden transition-colors duration-700"
        >
          <motion.div
            className="relative w-full h-full flex justify-center items-center flex-wrap mt-2"
            animate={{ top: isActive ? "-73%" : "0%" }}
          >
            <MenuIcon className="w-5 h-5 text-invert-accent-hightlights" />
            <X className="w-5 h-5 text-invert-accent-hightlights" />
          </motion.div>
        </button>
      </div>
    </div>
  );
}
