"use client";
import Terminal from "./terminal";
import { TerminalSquareIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/src/components/ui/drawer";
import { useMediaQuery } from "@/lib/useMediaQuery";

export default function TerminalIcon() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <div className="w-screen fixed bottom-8 z-40">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <div className="absolute bottom-8 z-40 right-24 bg-text-emphasis rounded-full w-fit p-4">
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
        <div className="fixed bottom-[6vh] right-[4vw] outline p-4 rounded-full bg-text-emphasis">
          <TerminalSquareIcon className="text-background" />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto h-2 mb-4 w-[100px] rounded-full bg-text-secondary" />
        <Terminal />
      </DrawerContent>
    </Drawer>
  );
}
