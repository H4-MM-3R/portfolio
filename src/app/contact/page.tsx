"use client";

import { fontBitMap, fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Terminal from "@/src/components/terminal/terminal";

export default function page() {
    return (
        <div>
            <div className="h-[20vh]"></div>
            <div>
                <div className="flex sm:flex-row flex-col justify-around items-center">
                    <div
                        className={cn(
                            fontMono.className,
                            "h-[75vh] w-[40vw] bg-background text-text rounded-xl flex flex-col justify-center items-center space-y-4 shadow-xl",
                        )}
                    >
                        <h1 className="text-3xl sm:text-5xl font-black pb-4 text-text-emphasis">Contact me</h1>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-[35vw] h-[50px] px-4 text-text-secondary bg-background placeholder:text-sm  placeholder:text-text rounded-xl outline"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-[35vw] h-[50px] px-4 text-text-secondary bg-background placeholder:text-text rounded-xl outline"
                        />
                        <div className="w-[35vw] flex justify-center items-center">
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
                    <div className="rounded-xl w-[40vw] h-[75vh] border-[2px] lg:border-text bg-background">
                        <Terminal />
                    </div>
                </div>
            </div>
        </div>
    );
}
