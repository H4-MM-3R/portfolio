"use client";

import { fontGrot } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import KeyBoardHR from "../components/ui/keyboard";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function MainPage() {
  const [cursor, setCursor] = React.useState(true);

  const toggleVisibility = () => {
    setCursor((prev) => !prev);
  };
  useEffect(() => {
    const blinkInterval = setTimeout(toggleVisibility, 500); // Change blinking speed as needed (e.g., 500ms for 0.5s blink interval)
    return () => clearTimeout(blinkInterval); // Cleanup on component unmount
  }, [cursor]);

  return (
    <div>
      <div className="h-[15vh] sm:h-[20vh]" />
      <motion.div className="flex flex-col sm:flex-row justify-center items-center h-full sm:h-[60vh] md:h-[70vh] px-[10vw] sm:space-x-8">
        <div className="flex justify-center items-center gap-8">
          <div className="gap-2 flex flex-col">
            <motion.h1
              initial={{
                x: -50,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: -50,
                opacity: 0,
              }}
              transition={{
                ease: [0.76, 0, 0.24, 1],
                duration: 0.7,
              }}
              className={cn(
                fontGrot.className,
                "text-5xl sm:text-7xl lg:text-9xl text-center text-invert-accent-hightlights font-bold",
              )}
            >
              Hello
            </motion.h1>
            <ul className="flex flex-col justify-center items-center gap-1 sm:gap-8">
              <motion.li
                className={cn(fontGrot.className, "text-2xl sm:text-4xl")}
                initial={{
                  x: -50,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                exit={{
                  x: -50,
                  opacity: 0,
                }}
                transition={{
                  delay: 1 * 0.04, // Adjust delay for each item
                  ease: [0.76, 0, 0.24, 1],
                  duration: 0.7,
                }}
              >
                I am Hemram
              </motion.li>
              <motion.li
                className={cn(
                  fontGrot.className,
                  "text-xl sm:text-4xl text-center",
                )}
                initial={{
                  x: -50,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                exit={{
                  x: -50,
                  opacity: 0,
                }}
                transition={{
                  delay: 2 * 0.04, // Adjust delay for each item
                  ease: [0.76, 0, 0.24, 1],
                  duration: 0.7,
                }}
              >
                a{" "}
                <span className="text-yellow dark:text-cyan">
                  Full Stack Developer
                  <span
                    className={cn(
                      "border border-r",
                      cursor
                        ? "border-blue dark:border-cyan"
                        : "border-background-highlights",
                    )}
                  />
                </span>{" "}
                based in India.
              </motion.li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{
            delay: 0.08,
            type: "tween",
            ease: [0.76, 0, 0.24, 1],
            duration: 0.7,
          }}
          className="w-full h-[40vh] sm:h-full"
        >
          <Canvas className="w-full h-full">
            <KeyBoardHR />
            <OrbitControls
              enableZoom={false}
              autoRotate={true}
              autoRotateSpeed={0.5}
            />
            <directionalLight position={[20, 15, 5]} />
          </Canvas>
        </motion.div>
      </motion.div>
      <div className="h-[40vh]" />
      <div className="h-[40vh]" />
      <div className="h-[40vh]" />
      <div className="h-[40vh]" />
    </div>
  );
}
