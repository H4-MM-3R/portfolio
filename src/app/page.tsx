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
import Link from "next/link";
import ResumeButton from "../components/Resume";

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
      <div className="lg:h-[4vh] xl:h-[8vh]" />

      {/* -------- Hero Section -------- */}
      <motion.div
        className="flex flex-col xl:flex-row-reverse justify-around items-center 
        h-full lg:h-[600px] xl:px-[50px]"
      >
        {/* -------- 3D Model -------- */}
        <motion.div
          initial={modelAnim.initial}
          animate={modelAnim.animate}
          exit={modelAnim.exit}
          transition={modelAnim.transition}
          className="w-full sm:[340px] md:h-[45vw] lg:h-[384px] lg:w-[478px] xl:w-[570px] xl:h-[600px] h-[40vh]"
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
        <div className="flex justify-center items-center gap-4 max-w-[534px]">
          <div className="gap-2 flex flex-col">
            <motion.div
              initial={heroAnim.initial}
              animate={heroAnim.animate}
              exit={heroAnim.exit}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className={cn(
                fontGrot.className,
                "flex items-center justify-center mb-4",
              )}
            >
              <Link href="/contact">
                <div
                  className="outline-[1px] rounded-full bg-background-highlights px-2 py-1
              shadow-sm shadow-invert-accent-hightlights text-text-emphasis
              font-bold h-fit w-fit text-xs"
                >
                  {" "}
                  Software Engineer
                </div>
              </Link>
            </motion.div>
            <motion.h1
              initial={heroAnim.initial}
              animate={heroAnim.animate}
              exit={heroAnim.exit}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.7 }}
              className={cn(
                fontGrot.className,
                "text-5xl sm:text-5xl lg:text-6xl xl:text-7xl text-center text-invert-accent-hightlights font-bold",
              )}
            >
              Hello
            </motion.h1>
            <ul className="flex flex-col justify-center items-center gap-1 sm:gap-8">
              <motion.li
                key={1}
                className={cn(
                  fontGrot.className,
                  "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-center text-invert-accent-hightlights font-bold",
                )}
                initial={heroAnim.initial}
                animate={heroAnim.animate}
                exit={heroAnim.exit}
                transition={{
                  delay: 1 * 0.04,
                  ease: [0.76, 0, 0.24, 1],
                  duration: 0.7,
                }}
              >
                I'm{" "}
                <span className="text-yellow dark:text-cyan">
                  Hemram
                  <span
                    className={cn(
                      "border border-r",
                      cursor
                        ? "border-yellow dark:border-cyan"
                        : "border-background-highlights",
                    )}
                  />
                </span>{" "}
              </motion.li>
              <motion.li
                key={2}
                className={cn(
                  fontGrot.className,
                  "text-lg text-center relative px-2 mt-2",
                )}
                initial={heroAnim.initial}
                animate={heroAnim.animate}
                exit={heroAnim.exit}
                transition={{
                  delay: 3 * 0.04,
                  ease: [0.76, 0, 0.24, 1],
                  duration: 0.7,
                }}
              >
                <p>
                  I excel in creating user-friendly, fast and scalable web
                  applications, with proficiency in a wide range of programming
                  languages and technologies.
                </p>
              </motion.li>
            </ul>

            <motion.div 
                initial={heroAnim.initial}
                animate={heroAnim.animate}
                exit={heroAnim.exit}
                transition={{
                  delay: 3 * 0.04,
                  ease: [0.76, 0, 0.24, 1],
                  duration: 0.7,
                }}
            className="relative flex justify-center items-end gap-1">
              <div className="relative">
                <svg
                  width="170"
                  height="120"
                  viewBox="0 0 187 120"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-invert-accent-hightlights"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M87.5277 101.471C108.631 112.907 132.767 121.306 156.697 119.661C165.404 119.063 173.464 116.552 181.739 114.056C182.319 113.882 182.65 113.267 182.476 112.683C182.299 112.1 181.683 111.769 181.1 111.946C172.985 114.393 165.085 116.874 156.546 117.461C132.956 119.083 109.177 110.73 88.3927 99.4339L88.5407 99.1001C90.1573 95.4809 89.156 90.1986 86.5148 84.655C82.7301 76.7084 75.6832 68.1696 69.3415 63.4532C66.4914 61.3345 63.7603 59.9878 61.508 59.7063C59.7521 59.4857 58.2458 59.8804 57.0819 60.9311C54.6033 63.1717 54.6903 66.9941 56.6552 71.426C60.7621 80.6962 72.8243 92.9036 79.3663 96.8189C81.4095 98.0408 83.4877 99.2423 85.5977 100.412C85.3307 101.056 85.0665 101.686 84.7821 102.287C83.9665 103.996 82.9652 105.491 81.0351 106.516C78.0254 108.109 74.4178 108.385 70.726 107.973C64.9648 107.325 59.0004 104.983 54.6091 102.972C30.1537 91.7687 18.0422 72.3374 11.5467 52.8306C4.99022 33.1293 4.13112 13.3351 2.18944 1.65891C2.09076 1.05812 1.52189 0.654693 0.921104 0.753374C0.320314 0.852054 -0.0860165 1.42092 0.0155664 2.02171C1.96886 13.7734 2.85406 33.6953 9.45694 53.5272C16.1208 73.5535 28.5865 93.4753 53.689 104.977C58.2632 107.073 64.48 109.491 70.4792 110.164C74.6325 110.628 78.6813 110.257 82.0684 108.463C85.1072 106.852 86.3145 104.339 87.5277 101.471ZM86.4539 98.3658L86.5293 98.2004C87.9428 95.0368 86.8341 90.4511 84.5238 85.6041C80.8871 77.968 74.1217 69.7572 68.0238 65.2237C65.9341 63.668 63.9344 62.5506 62.1756 62.0804C60.7244 61.6944 59.4648 61.7496 58.5621 62.568C57.7059 63.3372 57.3663 64.3965 57.3808 65.63C57.3953 67.0783 57.8772 68.7414 58.6695 70.5321C62.6167 79.4395 74.2117 91.1651 80.4982 94.9265C82.4515 96.0933 84.4367 97.2426 86.4539 98.3658Z"
                    className="fill-invert-accent-hightlights"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M184.536 110.644C184.441 111.117 184.118 111.712 183.764 112.347C182.923 113.862 181.724 115.476 181.19 116.26C180.848 116.765 180.981 117.45 181.483 117.792C181.988 118.135 182.673 118.004 183.016 117.499C183.669 116.538 185.262 114.385 186.118 112.6C186.577 111.642 186.815 110.757 186.763 110.121C186.675 109.039 185.819 108.362 184.121 108.403C182.113 108.452 178.383 109.46 175.26 108.249C174.694 108.029 174.053 108.313 173.835 108.879C173.615 109.448 173.896 110.086 174.465 110.307C177.443 111.459 180.914 110.905 183.251 110.673C183.695 110.629 184.223 110.635 184.536 110.644Z"
                    className="fill-invert-accent-hightlights"
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="flex justify-cente items-end">
                  <ResumeButton />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* -------- Resume -------- */}
      <div className="h-[4vh] xl:h-[8vh]" />

      {/* -------- Text Reveal -------- */}
      <div className="relative">
        <div className="relative">
          <TextRevealByWord text="Thank you for visiting my website!" />
        </div>
      </div>

      {/* -------- Bento Grid -------- */}

      {/* <div className="container">
                  <BentoGrid className="lg:grid-rows-2">
                    {features.map((feature) => (
                      <BentoCard key={feature.name} {...feature} />
                    ))}
                  </BentoGrid>
                </div> */}

      <div className="h-[20vh]" />
    </div>
  );
}
