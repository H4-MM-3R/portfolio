"use client";

import { fontGrot } from "@/lib/fonts";
import { cn, anim } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";
import { KeyBoardHR } from "../components/ui/keyboard";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";

export default function Home() {
  return (
    <motion.div
      initial={anim.initial}
      animate={anim.animate}
      exit={anim.exit}
      transition={{
        ease: [0.76, 0, 0.24, 1],
        duration: 0.7,
      }}
      className=""
    >
      <div className="h-[20vh]" />

      <div className="flex justify-center items-center gap-8">
        <div className="gap-8 flex flex-col">
          <motion.h1
            initial={anim.initial}
            animate={anim.animate}
            exit={anim.exit}
            transition={{
              ease: [0.76, 0, 0.24, 1],
              duration: 0.7,
            }}
            className={cn(
              fontGrot.className,
              "text-7xl sm:text-9xl text-center text-invert-accent-hightlights font-bold",
            )}
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
      </div>
      <div className="absolute w-full h-screen top-0 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: 0.08,
            ease: [0.76, 0, 0.24, 1],
            duration: 0.7,
          }}
          className="relative w-full h-full"
        >
          <Canvas className="w-full h-full">
            <KeyBoardHR />
            <OrbitControls enableZoom={false} />
            <directionalLight position={[20, 15, 5]} />
          </Canvas>
        </motion.div>
      </div>
      <div className="h-[40vh]" />
    </motion.div>
  );
}
