"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

export default function PageTransiton({ children, className }: { children: ReactNode, className?: string }, key?: string) {
  return (
  <AnimatePresence key={key}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y: -20 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  </AnimatePresence>
  );
}
