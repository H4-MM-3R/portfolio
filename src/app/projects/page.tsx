"use client";

import { fontGrot, fontMono } from "@/lib/fonts";
import { cn, anim } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export default function page() {
  return (
    <motion.div
      initial={anim.initial}
      animate={anim.animate}
      exit={anim.exit}
      transition={{
        ease: [0.76, 0, 0.24, 1],
        duration: 0.7,
      }}
      key={"projects"}
    >
      <div className="h-[15vh]"></div>

      <motion.div
        initial={anim.initial}
        animate={anim.animate}
        exit={anim.exit}
        transition={{
          delay: 0.01,
          ease: [0.76, 0, 0.24, 1],
          duration: 0.7,
        }}
        className={cn(
          fontGrot.className,
          "text-7xl text-center font-bold text-invert-accent-hightlights",
        )}
      >
        Projects
      </motion.div>
      <div className="h-[5vh]"></div>

      <div className="sm:block w-full mx-auto px-8 sm:px-20 min-[1400px]:max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none p-0 mt-[50px] gap-[15px] relative">
          {Array.from({ length: 6 }).map((_) => (
            <div className="relative">
              <div
                className="absolute bg-invert-accent-hightlights inset-0"
                style={{
                  clipPath:
                    "polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% 100%, calc(100% - 12px) 100%, 12px 100%, 0px 100%, 0px 0px)",
                }}
              />
              <motion.div
                whileHover={{ y: -9, x: -9 }}
                whileTap={{ y: 0, x: 0 }}
                className="md:block hidden"
              >
                <motion.div
                  className="border-[2px] border-invert-accent-hightlights flex justify-between flex-col items-start relative h-full py-8 px-7 transition-all bg-background"
                  style={{
                    clipPath:
                      "polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% 100%, calc(100% - 12px) 100%, 12px 100%, 0px 100%, 0px 0px)",
                  }}
                >
                  <span
                    className="absolute block origin-top-right rotate-45 object-cover z-20 bg-neutral-950"
                    style={{
                      right: "-2px",
                      top: "10px",
                      width: "16.9706px",
                      height: "2px",
                    }}
                  ></span>
                  <header>
                    <h3 className="mb-[10px]">
                      <Link
                        className="hover:text-cyan text-2xl font-semibold"
                        href="/blogs"
                      >
                        Time to Have More Fun
                      </Link>
                    </h3>
                    <div className="text-sm">
                      A nicer look at your GitHub profile and repo stats.
                      Includes data visualizations of your top languages,
                      starred repositories, and sort through your top repos by
                      number of stars, forks, and size.
                    </div>
                  </header>
                  <footer>
                    <ul
                      className={cn(
                        fontMono.className,
                        "flex items-end flex-1 flex-wrap p-0 mt-[20px] list-none flex-grow gap-[15px] text-xs",
                      )}
                    >
                      <li className="outline-[1px] rounded-full bg-background-highlights px-2 py-1 shadow-sm shadow-invert-accent-hightlights">
                        Next.js
                      </li>
                      <li className="outline-[1px] rounded-full bg-background-highlights px-2 py-1 shadow-sm shadow-invert-accent-hightlights">
                        Next.js
                      </li>
                      <li className="outline-[1px] rounded-full bg-background-highlights px-2 py-1 shadow-sm shadow-invert-accent-hightlights">
                        Next.js
                      </li>
                    </ul>
                  </footer>
                </motion.div>
              </motion.div>

              <motion.div
                whileTap={{ y: 0, x: 0 }}
                initial={{ y: -7 , x: -7 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="md:hidden"
              >
                <motion.div
                  className="border-[2px] border-invert-accent-hightlights flex justify-between flex-col items-start relative h-full py-8 px-7 transition-all bg-background"
                  style={{
                    clipPath:
                      "polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% 100%, calc(100% - 12px) 100%, 12px 100%, 0px 100%, 0px 0px)",
                  }}
                >
                  <span
                    className="absolute block origin-top-right rotate-45 object-cover z-20 bg-neutral-950"
                    style={{
                      right: "-2px",
                      top: "10px",
                      width: "16.9706px",
                      height: "2px",
                    }}
                  ></span>
                  <header>
                    <h3 className="mb-[10px]">
                      <Link
                        className="hover:text-cyan text-2xl font-semibold"
                        href="/blogs"
                      >
                        Time to Have More Fun
                      </Link>
                    </h3>
                    <div className="text-sm">
                      A nicer look at your GitHub profile and repo stats.
                      Includes data visualizations of your top languages,
                      starred repositories, and sort through your top repos by
                      number of stars, forks, and size.
                    </div>
                  </header>
                  <footer>
                    <ul
                      className={cn(
                        fontMono.className,
                        "flex items-end flex-1 flex-wrap p-0 mt-[20px] list-none flex-grow gap-[15px] text-xs",
                      )}
                    >
                      <li className="outline-[1px] rounded-full bg-background-highlights px-2 py-1 shadow-sm shadow-invert-accent-hightlights">
                        Next.js
                      </li>
                      <li className="outline-[1px] rounded-full bg-background-highlights px-2 py-1 shadow-sm shadow-invert-accent-hightlights">
                        Next.js
                      </li>
                      <li className="outline-[1px] rounded-full bg-background-highlights px-2 py-1 shadow-sm shadow-invert-accent-hightlights">
                        Next.js
                      </li>
                    </ul>
                  </footer>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
