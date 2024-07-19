"use client";

import { fontGrot, fontMono } from "@/lib/fonts";
import { GeistSans } from "geist/font/sans";
import { cn, anim } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function page() {
  const projectData = siteConfig.projects;
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
      <div className="h-[15vh]" />

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

      <div className="h-[5vh]" />

      <div className="w-full mx-auto px-8 sm:px-20 min-[1400px]:max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none p-0 mt-[50px] gap-[35px] relative">
          {projectData.map((project, i) => (
            <motion.div
              className="relative group"
              initial={anim.initial}
              animate={anim.animate}
              exit={anim.exit}
              transition={{
                delay: 0.05 * i,
                ease: [0.76, 0, 0.24, 1],
                duration: 0.7,
              }}
              key={i}
            >
              <div
                className="absolute bg-invert-accent-hightlights inset-0 group"
                style={{
                  clipPath:
                    "polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% 100%, calc(100% - 12px) 100%, 12px 100%, 0px 100%, 0px 0px)",
                }}
              ></div>

              <motion.div
                whileHover={{ y: -9, x: -9 }}
                whileTap={{ y: 0, x: 0 }}
                className="md:block hidden h-full"
              >
                <motion.div
                  className="border-[2px] border-invert-accent-hightlights relative h-full py-8 px-7 transition-all bg-background"
                  style={{
                    clipPath:
                      "polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% 100%, calc(100% - 12px) 100%, 12px 100%, 0px 100%, 0px 0px)",
                  }}
                >
                  <span
                    className="absolute block origin-top-right rotate-45 object-cover z-20 bg-invert-accent-hightlights"
                    style={{
                      right: "-2px",
                      top: "10px",
                      width: "16.9706px",
                      height: "2px",
                    }}
                  ></span>
                  <Link href={project.href} target="_blank">
                    <div className="flex flex-col items-start justify-between h-full">
                      <header>
                        <h3
                          className={cn(
                            fontGrot.className,
                            "group-hover:font-bold group-hover:text-yellow dark:group-hover:text-cyan text-2xl font-extrabold text-invert-accent-hightlights mb-[10px] group transition-colors duration-500",
                          )}
                        >
                          {project.title}
                        </h3>
                        <div
                          className={cn(
                            GeistSans.className,
                            "text-sm text-text-emphasis",
                          )}
                        >
                          {project.brief}
                        </div>
                      </header>
                      <footer>
                        <ul
                          className={cn(
                            fontMono.className,
                            "flex items-end flex-1 flex-wrap p-0 mt-[20px] list-none flex-grow gap-[15px] text-xs",
                          )}
                        >
                          {project.tags.map((tag) => (
                            <li className="outline-[1px] rounded-full bg-background-highlights px-2 py-1 shadow-sm shadow-invert-accent-hightlights text-text-emphasis font-bold">
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </footer>
                    </div>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Mobile View */}

              <motion.div
                whileTap={{ y: 0, x: 0 }}
                initial={{ y: -7, x: -7 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="md:hidden"
              >
                <motion.div
                  className="border-[2px] border-invert-accent-hightlights flex justify-between flex-col items-start relative h-full py-8 px-7 transition-all bg-background group"
                  style={{
                    clipPath:
                      "polygon(12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% 100%, calc(100% - 12px) 100%, 12px 100%, 0px 100%, 0px 0px)",
                  }}
                >
                  <span
                    className="absolute block origin-top-right rotate-45 object-cover z-20 bg-invert-accent-hightlights group"
                    style={{
                      right: "-2px",
                      top: "10px",
                      width: "16.9706px",
                      height: "2px",
                    }}
                  ></span>
                  <Link
                    className="text-2xl font-semibold"
                    href={project.href}
                    target="_blank"
                  >
                    <header>
                      <h3 className="mb-[10px] dark:group-hover:text-cyan group-hover:text-yellow">
                        {project.title}
                      </h3>
                      <div className="text-sm">{project.brief}</div>
                    </header>
                    <footer>
                      <ul
                        className={cn(
                          fontMono.className,
                          "flex items-end flex-1 flex-wrap p-0 mt-[20px] list-none flex-grow gap-[15px] text-xs",
                        )}
                      >
                        {project.tags.map((tag) => (
                          <li className="outline-[1px] rounded-full bg-background-highlights px-2 py-1 shadow-sm shadow-invert-accent-hightlights">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </footer>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
