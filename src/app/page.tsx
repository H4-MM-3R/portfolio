"use client";
import { fontGrot } from "@/lib/fonts";
import { cn, heroAnim, modelAnim } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { Suspense, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import KeyBoardHR from "../components/Keyboard";
import TextRevealByWord from "../components/ui/magicui/TextReveal";

export default function MainPage() {
  const [cursor, setCursor] = React.useState(true);

  const toggleVisibility = () => {
    setCursor((prev) => !prev);
  };
  useEffect(() => {
    const blinkInterval = setTimeout(toggleVisibility, 500);
    return () => clearTimeout(blinkInterval);
  }, [cursor]);

  return (
    <div>
      {/* -------- Extra Space for the Header -------- */}
      <div className="h-[6vh] lg:h-[8vh]" />

      {/* -------- Hero Section -------- */}
      <motion.div
        className="flex flex-col lg:flex-row-reverse justify-center items-center 
        h-full sm:h-[50vh] md:h-[50vh] lg:h-[600px] xl:gap-24 xl:px-[10vw]"
      >
        {/* -------- 3D Model -------- */}
        <motion.div
          initial={modelAnim.initial}
          animate={modelAnim.animate}
          exit={modelAnim.exit}
          transition={modelAnim.transition}
          className="w-full sm:h-full md:w-[75vw] lg:w-[55vw] h-[30vh]"
        >
          <Suspense fallback={<Loader />}>
            <Canvas className="w-full h-full">
              <KeyBoardHR />
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                autoRotate={true}
              />
              <directionalLight position={[Math.sqrt(3), 0, 1]} intensity={2} />
              <directionalLight
                position={[-Math.sqrt(3), 0, 1]}
                intensity={2}
              />
              <directionalLight
                position={[Math.sqrt(3), -1, -1]}
                intensity={0.9}
              />
              <directionalLight
                position={[-Math.sqrt(3), -1, -1]}
                intensity={0.9}
              />
            </Canvas>
          </Suspense>
        </motion.div>

        {/* -------- Intro Content -------- */}
        <div className="flex justify-center items-center gap-4 lg:ml-12">
          <div className="gap-2 flex flex-col">
            <motion.h1
              initial={heroAnim.initial}
              animate={heroAnim.animate}
              exit={heroAnim.exit}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className={cn(
                fontGrot.className,
                "text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-center text-invert-accent-hightlights font-bold",
              )}
            >
              Hello
            </motion.h1>
            <ul className="flex flex-col justify-center items-center gap-1 sm:gap-8">
              <motion.li
                key={1}
                className={cn(fontGrot.className, "text-2xl sm:text-4xl")}
                initial={heroAnim.initial}
                animate={heroAnim.animate}
                exit={heroAnim.exit}
                transition={{
                  delay: 1 * 0.04,
                  ease: [0.76, 0, 0.24, 1],
                  duration: 0.7,
                }}
              >
                I am Hemram
              </motion.li>
              <motion.li
                key={2}
                className={cn(
                  fontGrot.className,
                  "text-xl sm:text-4xl text-center",
                )}
                initial={heroAnim.initial}
                animate={heroAnim.animate}
                exit={heroAnim.exit}
                transition={{
                  delay: 2 * 0.04,
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
                        ? "border-yellow dark:border-cyan"
                        : "border-background-highlights",
                    )}
                  />
                </span>{" "}
                based in India.
              </motion.li>
            </ul>
          </div>
        </div>
      </motion.div>

        {/* -------- Text Reveal -------- */}
            <TextRevealByWord text="Thank you for visiting my website!" />
            

        {/* -------- Bento Grid -------- */}


    </div>
  );
}
