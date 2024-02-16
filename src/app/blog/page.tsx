"use client"

import Image from "next/image"
import Link from "next/link"
import { allDocs } from "contentlayer/generated";

export default async function BlogPage() {
  const blogs = allDocs.filter((blog) => blog.published)

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
    <div className="h-[10vh]"></div>
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-bold text-4xl tracking-tight lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            A blog built using Contentlayer. Posts are written in MDX.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      {blogs?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {blogs.map((blog, index) => (
            <article
              key={blog._id}
              className="group relative flex flex-col space-y-2"
            >
              {blog.image && (
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={804}
                  height={452}
                  className="rounded-md border bg-muted transition-colors"
                  priority={index <= 1}
                />
              )}
              <h2 className="text-2xl font-black">{blog.title}</h2>
              {blog.description && (
                <p className="text-muted-foreground">{blog.description}</p>
              )}
                <p className="text-sm text-muted-foreground">
                "12/12/12"
                </p>
              <Link href={blog.slug} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  )
}
