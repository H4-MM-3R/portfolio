import Image from "next/image";
import Link from "next/link";
import { allDocs } from "contentlayer/generated";
import { Footer } from "@/src/components/footer";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { MoveUpRight } from "lucide-react";

export default async function BlogPage() {
  const blogs = allDocs.filter((blog) => blog.published);

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ">
      <div className="h-[10vh]"></div>
      <div className=" flex flex-col gap-4 md:flex-row md:justify-center md:gap-8 text-center">
        <div className=" space-y-4 ">
          <h1
            className={cn(
              GeistSans.className,
              " text-text-emphasis inline-block font-bold text-4xl tracking-tight lg:text-5xl ",
            )}
          >
            Blogs
          </h1>
          <p className={cn(GeistMono.className, "text-xl text-text-secondary")}>
            A blog built using Contentlayer. Posts are written in MDX.
          </p>
        </div>
      </div>
      <hr className="my-8 border-text" />
      {blogs?.length ? (
      <div className="flex justify-center items-center">
        <div className="grid w-[775px]">
        <div className=" grid gap-2">
          {blogs.map((blog) => (
            <Link href={blog.slug}>
            <div className=" flex justify-between items-center w-full bg-background p-4 rounded-lg transition-all duration-500" >
              <article
                key={blog._id}
                className="group relative flex flex-col sm:flex-row space-y-2 sm:space-x-8"
              >
                <div className="group relative flex flex-col space-y-2">
                  <h2 className="text-2xl font-bold text-text-emphasis">{blog.title}</h2>
                  {blog.description && (
                    <p className="text-text">{blog.description}</p>
                  )}
                </div>
              </article>
              <MoveUpRight />
            </div>
            </Link>
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
    </div>
  );
}
