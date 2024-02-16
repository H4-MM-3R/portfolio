"use client";

import { fontBitMap, fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Terminal from "@/src/components/terminal/terminal";

export default function page() {
    return (
        <div>
            <div className="h-[20vh]"></div>
            <div>
                <div className="flex justify-around items-center">
                    <div
                        className={cn(
                            fontMono.className,
                            "h-[600px] w-[500px] bg-[#FDF6E3] dark:bg-[#002B36] dark:text-[#93A1A1] text-[#586E75] rounded-xl flex flex-col justify-center items-center space-y-4",
                        )}
                    >
                        <h1 className="text-6xl font-black pb-4">Contact me</h1>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-[400px] h-[50px] px-4 text-accent bg-accent-foreground dark:bg-[#93A1A1] placeholder:text-accent rounded-xl"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-[400px] h-[50px] px-4 text-accent bg-accent-foreground dark:bg-[#93A1A1] placeholder:text-accent rounded-xl"
                        />
                        <textarea
                            name="Your Message"
                            cols={35}
                            rows={10}
                            placeholder="Your Message"
                            className="p-4 bg-accent-foreground text-accent dark:bg-[#93A1A1] placeholder:text-accent rounded-xl"
                        />
                        <button
                            className={cn(
                                fontBitMap.className,
                                "w-[150px] h-[50px] bg-accent text-accent-foreground border-accent-foreground border-[2px]",
                            )}
                        >
                            SUBMIT
                        </button>
                    </div>
                    <div className="rounded-xl w-[40vw] h-[70vh] border-[2px]">
                        <Terminal />
                    </div>
                </div>
            </div>
        </div>
    );
}
