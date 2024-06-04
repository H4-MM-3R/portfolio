"use client";
import { fontGrot } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { Suspense, useEffect } from "react";
import KeyBoardHR from "../components/ui/keyboard";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

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
        <>
            <div>
                <div className="h-[8vh] sm:h-[20vh]" />

                <motion.div className="flex flex-col sm:flex-row-reverse justify-center items-center h-full sm:h-[60vh] md:h-[70vh] sm:gap-48 px-[10vw]">
                    <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 35 }}
                        transition={{
                            delay: 0.08,
                            type: "tween",
                            ease: [0.76, 0, 0.24, 1],
                            duration: 0.7,
                        }}
                        className="w-full sm:h-full sm:w-[60vw] h-[30vh]"
                    >
                        <Suspense
                            fallback={
                                <div className="w-full h-full flex justify-center items-center">
                                    <svg className="animate-spin absolute top-1/2 left-1/2 mt-[-25px] ml-[-25px] w-[50px] h-[50px]" viewBox="0 0 50 50">
                                        <circle
                                            className="text-red"
                                            cx="25"
                                            cy="25"
                                            r="20"
                                            fill="none"
                                            stroke-width="5"
                                        ></circle>
                                    </svg>
                                </div>
                            }
                        >
                            <Canvas className="w-full h-full">
                                <KeyBoardHR />
                                <OrbitControls
                                    enablePan={false}
                                    enableZoom={false}
                                    autoRotate={true}
                                    autoRotateSpeed={0.5}
                                />
                                <directionalLight
                                    position={[Math.sqrt(3), 0, 1]}
                                    intensity={2}
                                />
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
                    <div className="flex justify-center items-center gap-8">
                        <div className="gap-2 flex flex-col">
                            <motion.h1
                                initial={{
                                    x: -35,
                                    opacity: 0,
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                }}
                                exit={{
                                    x: -35,
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
                                        x: -35,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        x: 0,
                                        opacity: 1,
                                    }}
                                    exit={{
                                        x: -35,
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
                                        x: -35,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        x: 0,
                                        opacity: 1,
                                    }}
                                    exit={{
                                        x: -35,
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

                <div className="h-[40vh]" />
                <div className="h-[40vh]" />
                <div className="h-[40vh]" />
                <div className="h-[40vh]" />
            </div>
        </>
    );
}
