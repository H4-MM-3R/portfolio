"use client";

import { fontBitMap } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Mdx } from "@/src/components/mdx";
import { allDocs } from "contentlayer/generated";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogProps {
  params: {
    slug: string;
  };
}

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParam === slug);
  if (!doc) notFound();

  return doc;
}

export default async function page({ params }: BlogProps) {
  const blog = await getDocFromParams(params.slug);
  return (
    <div>
      <div className="h-[10vh]"></div>
      <article className="container relative max-w-3xl py-6 lg:py-10">
        <Link
          href="/blog"
          className="absolute left-[-200px] top-14 hidden xl:inline-flex"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
        <div>
          <time
            dateTime="April 9, 2023"
            className="block text-sm text-muted-foreground"
          >
            Published on "April 9, 2023"
          </time>
          <h1 className="mt-2 inline-block font-black text-4xl leading-tight lg:text-5xl">
            {blog.title}
          </h1>
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
        <hr className="mt-12" />
        <div className="flex justify-center py-6 lg:py-10">

          <Link
            href="/blog"
          >
            <motion.button
              animate={{ scale: 1 }}
              whileHover={{ scaleX: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="dark:bg-background bg-border dark:text-foreground text-foreground px-2 py-2 border-[2px] border-foreground overflow-hidden transition-colors duration-500 inline-flex space-x-4"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              <span className={cn(fontBitMap.className, "text-xs uppercase")}>
                See all blogs
              </span>
            </motion.button>
          </Link>
        </div>
      </article>
    </div>
  );
}
