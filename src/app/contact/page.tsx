"use client";

import { fontBitMap, fontGrot } from "@/lib/fonts";
import { cn, anim } from "@/lib/utils";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export default function page() {
    return (
        <motion.div
            initial={anim.initial}
            animate={anim.animate}
            exit={anim.exit}
            transition={anim.transition}
        >
            <div className="h-[20vh]"></div>

            <div className="flex flex-col justify-center items-center gap-8">
                <motion.h1
                    initial={anim.initial}
                    animate={anim.animate}
                    exit={anim.exit}
                    transition={{
                        ease: [0.76, 0, 0.24, 1],
                        duration: 0.5,
                        delay: 0.2,
                    }}
                    className={cn(
                        fontGrot.className,
                        "text-6xl sm:text-9xl text-invert-accent-hightlights font-bold text-center",
                    )}
                >
                    Contact
                </motion.h1>

                <div className="flex space-x-4 md:space-x-8">
                    <Link href="https://github.com/h4-mm-3r" target="_blank">
                        <motion.div
                            whileHover={{ scale: 0.9 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                                ease: [0.76, 0, 0.24, 1],
                                duration: 0.5,
                            }}
                            className="size-[29vw] sm:size-44 bg-background border-text border-[2px] rounded-xl z-0"
                        >
                            <motion.div
                                className="bg-transparent size-[29vw] sm:size-44 absolute z-10 flex justify-center items-center"
                                whileHover={{ scale: 1.2 }}
                            >
                                <GithubIcon className="h-7 w-7 sm:h-10 sm:w-10 text-invert-accent-hightlights" />
                            </motion.div>
                        </motion.div>
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/hemram-kumarapu-440859214"
                        target="_blank"
                    >
                        <motion.div
                            whileHover={{ scale: 0.9 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                                ease: [0.76, 0, 0.24, 1],
                                duration: 0.5,
                            }}
                            className="size-[29vw] sm:size-44 bg-background border-text border-[2px] rounded-xl z-0"
                        >
                            <motion.div
                                className="bg-transparent size-[29vw] sm:size-44 absolute z-10 flex justify-center items-center"
                                whileHover={{ scale: 1.2 }}
                            >
                                <LinkedinIcon className="h-7 w-7 sm:h-10 sm:w-10 text-invert-accent-hightlights" />
                            </motion.div>
                        </motion.div>
                    </Link>

                    <Link href="https://x.com/8Hemram" target="_blank">
                        <motion.div
                            whileHover={{ scale: 0.9 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                                ease: [0.76, 0, 0.24, 1],
                                duration: 0.5,
                            }}
                            className="size-[29vw] sm:size-44 bg-background border-text border-[2px] rounded-xl z-0"
                        >
                            <motion.div
                                className="bg-transparent size-[29vw] sm:size-44 absolute z-10 flex justify-center items-center md:flex "
                                whileHover={{ scale: 1.2 }}
                            >
                                <TwitterIcon className="h-7 w-7 sm:h-10 sm:w-10 text-invert-accent-hightlights" />
                            </motion.div>
                        </motion.div>
                    </Link>
                </div>
            </div>

            <div className="h-20"></div>

            <div className="flex justify-center items-center">
                <motion.button
                    whileHover={{ y: -7, x: -7 }}
                    whileTap={{ y: 0, x: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="z-10 hidden md:block"
                >
                    <a href="mailto:kuheram777@gmail.com">
                        <span
                            className={cn(
                                fontBitMap.className,
                                "text-invert-accent-hightlights bg-background-highlights outline outline-text-emphasis p-4",
                            )}
                        >
                            Get in Touch
                        </span>
                    </a>
                </motion.button>
                <motion.button
                    whileTap={{ y: [-7, 0], x: [-7, 0] }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="z-10 md:hidden"
                >
                    <a href="mailto:kuheram777@gmail.com">
                        <span
                            className={cn(
                                fontBitMap.className,
                                "text-invert-accent-hightlights bg-background-highlights outline p-4",
                            )}
                        >
                            Get in Touch
                        </span>
                    </a>
                </motion.button>
                <div className="bg-invert-accent-hightlights w-[228px] h-[50px] absolute z-0" />
            </div>
        </motion.div>
    );
}
