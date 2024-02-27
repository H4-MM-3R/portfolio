"use client";

import { fontBitMap } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import PageTransiton from "@/src/components/page-transition";
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerTrigger,
} from "@/src/components/ui/drawer";
import { PinContainer } from "@/src/components/ui/hover-card";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function page() {
    const [open, setOpen] = useState(false);

    return (
        <PageTransiton>
            <div className="h-[20vh]"></div>

            {/* ---------------- Desktop Version ---------------- */}

            <div className="hidden sm:block container px-8 mx-auto w-full">
                <div className="grid lg:grid-cols-3 grid-cols-2 gap-8">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i}>
                            <PinContainer
                                title="H4-MM-3R/Portfolio"
                                href="https://github.com/h4-mm-3r/portfolio"
                            >
                                <div className="w-[38vw] h-[285px] lg:w-[27vw] lg:h-[285px] xl:w-[375px]">
                                    <div className="w-full h-[180px] relative">
                                        <Image
                                            key={i}
                                            src="/blog/testing.jpg"
                                            alt="Aceternity UI"
                                            fill={true}
                                        />
                                    </div>
                                    <h3 className="hidden sm:block md:hidden max-w-xs pb-2 m-0 font-bold text-base text-text-emphasis">
                                        SM
                                    </h3>
                                    <h3 className="hidden md:block lg:hidden max-w-xs pb-2 m-0 font-bold text-base text-text-emphasis">
                                        MD
                                    </h3>
                                    <h3 className="hidden lg:block xl:hidden max-w-xs pb-2 m-0 font-bold text-base text-text-emphasis">
                                        LG
                                    </h3>
                                    <h3 className="hidden xl:block max-w-xs pb-2 m-0 font-bold text-base text-text-emphasis">
                                        XL
                                    </h3>
                                </div>
                            </PinContainer>
                        </div>
                    ))}
                </div>
            </div>

            {/* ---------------- Mobile Version ---------------- */}
            <div className="sm:hidden container space-y-8">
                <Drawer open={open} onOpenChange={setOpen}>
                    {Array.from({ length: 6 }).map((_, i) => (
                        <DrawerTrigger asChild key={i}>
                            <div className="shadow-[0_8px_16px_rgb(0_0_0/0.4)] rounded-xl p-4">
                                <div className="w-full h-[180px] relative ">
                                    <Image
                                        key={i}
                                        src="/blog/testing.jpg"
                                        alt="Aceternity UI"
                                        fill={true}
                                    />
                                </div>
                            </div>
                        </DrawerTrigger>
                    ))}
                    <DrawerContent>
                        <div className="mx-auto h-2 mb-4 w-[100px] rounded-full bg-text-secondary" />
                        <div className="container">
                            <div className="w-full h-[180px] relative ">
                                <Image
                                    src="/blog/testing.jpg"
                                    alt="Aceternity UI"
                                    fill={true}
                                />
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                                reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                                mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
                                officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
                                amet voluptate voluptate dolor minim nulla est proident. Nostrud
                            </div>
                        </div>
                        <DrawerFooter>
                            <motion.button
                                animate={{ scale: 1 }}
                                whileHover={{ scaleX: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className="bg-background-highlights text-text-emphasis px-6 py-2 rounded-full overflow-hidden transition-colors duration-500 border-text border-[2px]"
                            >
                                <span className={cn(fontBitMap.className, "text-xs uppercase")}>
                                    Live Link
                                </span>
                            </motion.button>
                            <motion.button
                                animate={{ scale: 1 }}
                                whileHover={{ scaleX: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className="bg-text-emphasis text-background-highlights px-6 py-2 rounded-full overflow-hidden transition-colors duration-500 border-text border-[2px]"
                            >
                                <span className={cn(fontBitMap.className, "text-xs uppercase")}>
                                    Check out Source Code
                                </span>
                            </motion.button>
                        </DrawerFooter>
                        <div className="h-[10vh]" />
                    </DrawerContent>
                </Drawer>
            </div>
        </PageTransiton>
    );
}
