"use client";

import { fontGrot, fontMono } from "@/lib/fonts";
import { cn, anim  } from "@/lib/utils";
import {  motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={anim.initial}
      animate={anim.animate}
      exit={anim.exit}
      transition={anim.transition}
      className="container"
    >
      <div className="h-[20vh]" />

      <div className="gap-8 flex flex-col">
        <motion.h1
          initial={anim.initial}
          animate={anim.animate}
          exit={anim.exit}
          transition={{
            ease: [0.76, 0, 0.24, 1],
            duration: 0.7,
          }}
          className={cn(fontGrot.className, "text-7xl sm:text-9xl text-center text-invert-accent-hightlights font-bold")}
        >
          Galleries
        </motion.h1>
        <ul className="flex flex-col justify-center items-center gap-8">
          <motion.li
            initial={anim.initial}
            animate={anim.animate}
            exit={anim.exit}
            transition={{
              delay: 0.04,
              ease: [0.76, 0, 0.24, 1],
              duration: 0.7,
            }}
            className={cn(fontGrot.className, "text-4xl")}
          >
            Galleries
          </motion.li>
          <motion.li
            initial={anim.initial}
            animate={anim.animate}
            exit={anim.exit}
            transition={{
              delay: 0.08,
              ease: [0.76, 0, 0.24, 1],
              duration: 0.7,
            }}
            className={cn(fontGrot.className, "text-4xl")}
          >
            Galleries
          </motion.li>
          <motion.li
            initial={anim.initial}
            animate={anim.animate}
            exit={anim.exit}
            transition={{
              delay: 0.16,
              ease: [0.76, 0, 0.24, 1],
              duration: 0.7,
            }}
            className={cn(fontGrot.className, "text-4xl")}
          >
            Galleries
          </motion.li>
        </ul>
      </div>
      <div className="h-[20vh]"></div>
      <div className="flex justify-center "></div>
    </motion.div>
  );
}
