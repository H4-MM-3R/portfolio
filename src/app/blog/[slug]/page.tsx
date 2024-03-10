"use client";

import { fontBitMap, fontGrot } from "@/lib/fonts";
import { cn, anim } from "@/lib/utils";
import { Mdx } from "@/src/components/mdx";
import { BlogProps } from "@/types/nav";
import { allDocs } from "contentlayer/generated";
import { motion, useScroll, useSpring } from "framer-motion";
import { GeistSans } from "geist/font/sans";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParam === slug);
  if (!doc) notFound();

  return doc;
}

export default function page({ params }: BlogProps) {
  const blog = getDocFromParams(params.slug);

  const { scrollYProgress } = useScroll();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      initial={anim.initial}
      animate={anim.animate}
      exit={anim.exit}
      transition={anim.transition}
      className="bg-background-highlights"
    >
      <motion.div
        className="hidden lg:block fixed top-10 bottom-10 left-9 right-0 w-[2px] h-full origin-top-left bg-invert-accent z-10"
        style={{ scaleY: scaleY, height: "calc(100% - 10vh)" }}
      />
      <motion.div className="hidden lg:block fixed top-10 bottom-10 left-9 right-0 w-[2px] h-[90vh] origin-top-left bg-background z-0 outline outline-background" />

      <div className="hidden absolute top-[23vh] lg:left-[7vw] xl:left-[15vw] lg:flex justify-center items-center ">
        <div className="z-10">
          <motion.button
            whileHover={{ y: -6, x: -6 }}
            whileTap={{ y: 0, x: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={cn(fontBitMap.className, " font-bold text-xs ")}
          >
            <Link href="/blog">
              <ChevronLeft className="hidden lg:block h-8 w-8 bg-background outline text-invert-accent-hightlights outline-text-emphasis" />
            </Link>
          </motion.button>
        </div>
        <div className="h-[33px] w-[34px] bg-invert-accent-hightlights absolute z-0" />
      </div>

      <div className="h-[9vh] sm:h-[15vh]"></div>
      <div className="h-[6vh] sm:hidden bg-background"></div>
      <article className="min-[1400px]:max-w-[1400px] px-6 mx-auto w-full relative max-w-3xl py-6 lg:py-10 bg-background">
        <div>
          <h1 className={cn(GeistSans.className, "mb-2 inline-block font-bold text-3xl leading-tight lg:text-5xl text-invert-accent-hightlights")}>
            {blog.title}
          </h1>
          <time
            dateTime="April 9, 2023"
            className="block text-base text-text-emphasis"
          >
            {blog.date} . {blog.duration} min to read
          </time>
        </div>
        {blog.image && (
          <Image
            src={blog.image}
            alt={blog.title}
            width={720}
            height={405}
            className="my-8 rounded-md border bg-muted transition-colors"
            priority
          />
        )}
        <Mdx code={blog.body.code} />
        <hr className="mt-12 border-text" />
        <div className="flex justify-center py-10">
          <Link href="/blog">
            <motion.button
              animate={{ scale: 1 }}
              whileHover={{ scaleX: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="dark:bg-background bg-border dark:text-foreground text-foreground px-2 py-2 border-[2px] border-foreground overflow-hidden transition-colors duration-700 inline-flex space-x-4"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              <span className={cn(fontBitMap.className, "text-xs uppercase")}>
                See all blogs
              </span>
            </motion.button>
          </Link>
        </div>
      </article>
    </motion.div>
  );
}
