"use client";

import { fontGrot } from "@/lib/fonts";
import { cn, anim, anim_new } from "@/lib/utils";
import { motion } from "framer-motion";
import { Suspense, useRef } from "react";
import React from "react";
import dynamic from "next/dynamic";

export default function Home() {
  {
    /* animate={{ borderRight: ["1px solid transparent", "1px solid ", "1px solid transparent"] }}
     *<Spline scene="https://prod.spline.design/0jQb6Qz1o7hjXqUZ/scene.splinecode" className="w-full h-full" />
     * */
  }
  const keyboard = useRef();

  function onLoad(spline: any) {
    keyboard.current = spline;
  }

  const Spline = dynamic(() => import("@splinetool/react-spline"));

  return (
    <motion.div
      initial={anim_new.initial}
      animate={anim_new.animate}
      exit={anim_new.exit}
      transition={{
        ease: [0.76, 0, 0.24, 1],
        duration: 0.7,
      }}
      className="container"
    >
      <div className="h-[20vh]" />

      <div className="flex justify-center items-center gap-8">
        <div className="gap-8 flex flex-col">
          <motion.h1
            initial={anim_new.initial}
            animate={anim_new.animate}
            exit={anim_new.exit}
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
              initial={anim_new.initial}
              animate={anim_new.animate}
              exit={anim_new.exit}
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
              initial={anim_new.initial}
              animate={anim_new.animate}
              exit={anim_new.exit}
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
              initial={anim_new.initial}
              animate={anim_new.animate}
              exit={anim_new.exit}
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
        <motion.div
          initial={anim.initial}
          animate={anim.animate}
          exit={anim.exit}
          transition={{
            ease: [0.76, 0, 0.24, 1],
            duration: 0.7,
          }}
          className="absolute h-full w-full top-0 left-0"
        >
          <Spline
            onLoad={onLoad}
            scene="https://prod.spline.design/WsUIUIH4lUSnB5jZ/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      <div className="flex justify-center items-center"></div>
    </motion.div>
  );
}
