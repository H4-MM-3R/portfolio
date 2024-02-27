"use client";

import { fontBitMap, fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import PageTransiton from "@/src/components/page-transition";

export default function page() {
  return (
    <PageTransiton>
      <div className="h-[20vh]"></div>
      <div>
        <div className="flex sm:flex-row flex-col justify-around items-center">
          <div
            className={cn(
              fontMono.className,
              "py-4 sm:py-8 w-[85vw] sm:w-[40vw] bg-background text-text rounded-xl flex flex-col justify-center items-center space-y-4 shadow-2xl sm:shadow-xl ",
            )}
          >
            <h1 className="text-3xl sm:text-5xl font-black pb-4 text-text-emphasis">
              Contact me
            </h1>
            <input
              type="text"
              placeholder="Your Name"
              className="sm:w-[35vw] h-[50px] px-4 text-text-secondary bg-background placeholder:text-text rounded-xl outline"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="sm:w-[35vw] h-[50px] px-4 text-text-secondary bg-background placeholder:text-text rounded-xl outline"
            />
            <div className="w-[65vw] sm:w-[35vw] flex justify-center items-center">
              <textarea
                name="Your Message"
                cols={80}
                rows={10}
                placeholder="Your Message"
                className="p-4 text-text-secondary bg-background placeholder:text-text rounded-xl outline"
              />
            </div>
            <button
              className={cn(
                fontBitMap.className,
                "w-[125px] h-[50px] bg-text-emphasis  text-background font-black text-sm",
              )}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </PageTransiton>
  );
}
