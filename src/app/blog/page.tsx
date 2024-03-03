"use client";
import Link from "next/link";
import { allDocs } from "contentlayer/generated";
import { Footer } from "@/src/components/footer";
import { cn, anim } from "@/lib/utils";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { fontGrot } from "@/lib/fonts";

export default function BlogPage() {
  const blogs = allDocs.filter((blog) => blog.published);

  return (
    <motion.div
      initial={anim.initial}
      animate={anim.animate}
      exit={anim.exit}
      transition={anim.transition}
      className="container max-w-4xl py-6 lg:py-10"
      key={"blog"}
    >
      <div className="h-[10vh]"></div>
      <div className=" flex flex-col gap-4 md:flex-row md:justify-center md:gap-8 text-center">
        <div className=" space-y-4 ">
          <motion.h1
            initial={anim.initial}
            animate={anim.animate}
            exit={anim.exit}
            transition={anim.transition}
            className={cn(
              fontGrot.className,
              " text-invert-accent-hightlights inline-block font-bold text-4xl tracking-tight lg:text-5xl ",
            )}
          >
            Blogs
          </motion.h1>
          <motion.p
            initial={anim.initial}
            animate={anim.animate}
            exit={anim.exit}
            transition={anim.transition}
            className={cn(fontGrot.className, "text-xl text-text-emphasis")}
          >
            A blog built using Contentlayer. Posts are written in MDX.
          </motion.p>
        </div>
      </div>
      <hr className="my-8 border-text" />
      {blogs?.length ? (
        <div className="flex justify-center items-center">
          <div className="grid w-[775px]">
            <div className=" grid gap-2">
              {blogs.map((_, i) => (
                <motion.div
                  key={blogs[i]._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    duration: 0.7 - (0.1 * i),
                  }}
                >
                  <Link href={blogs[i].slug}>
                    <motion.div className=" flex justify-between items-center w-full bg-background p-4 rounded-lg transition-all duration-700">
                      <article
                        key={blogs[i]._id}
                        className="group relative flex flex-col sm:flex-row space-y-2 sm:space-x-8"
                      >
                        <div className="group relative flex flex-col space-y-2">
                          <h2 className="text-2xl font-bold text-text-emphasis">
                            {blogs[i].title}
                          </h2>
                          {blogs[i].description && (
                            <p className="text-text">{blogs[i].description}</p>
                          )}
                        </div>
                      </article>
                      <MoveUpRight />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-xl text-text-emphasis">.</div>
              <div className="text-xl text-text-emphasis">.</div>
              <div className="text-xl text-text-emphasis">.</div>
              <div className="text-xl text-text-emphasis">Coming Soon</div>
            </div>
          </div>
        </div>
      ) : (
        <p>No posts published.</p>
      )}

      <div className="h-[20vh]"></div>
      <Footer />
    </motion.div>
  );
}
