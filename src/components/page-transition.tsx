"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function PageTransiton({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
