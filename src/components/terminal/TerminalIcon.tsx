"use client";
import { TerminalSquareIcon } from "lucide-react";
import * as React from "react";

import { useMediaQuery } from "@/lib/useMediaQuery";
import Terminal from "./Terminal";
import { Dialog, DialogContent, DialogTrigger } from "../ui/shadcn/Dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/shadcn/Drawer";

export default function TerminalIcon() {
    const [open, setOpen] = React.useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    if (isDesktop) {
        return (
            <div className="w-screen fixed bottom-8 z-40">
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <div className="absolute bottom-8 z-40 right-24 bg-invert-accent-hightlights rounded-full w-fit p-4">
                            <TerminalSquareIcon className="text-background h-9 w-9" />
                        </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <Terminal />
                    </DialogContent>
                </Dialog>
            </div>
        );
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <div className="fixed bottom-[6vh] right-[4vw] outline p-4 rounded-full bg-invert-accent-hightlights z-10">
                    <TerminalSquareIcon className="text-background h-7 w-7" />
                </div>
            </DrawerTrigger>
            <DrawerContent>
                <div className="absolute rounded-full h-4 w-4 bg-red left-[23px] top-8 flex items-center justify-center"/>
                <div className="absolute rounded-full h-4 w-4 bg-yellow left-[46px] top-8 flex items-center justify-center"/>
                <div className="absolute rounded-full h-4 w-4 bg-green left-[69px] top-8 flex items-center justify-center"/>
                <div className="mx-auto h-2 mb-4 w-[100px] rounded-full bg-text-secondary" />
                <Terminal />
            </DrawerContent>
        </Drawer>
    );
}
