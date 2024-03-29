"use client";

import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { MainNavProps } from "@/types/nav";
import { usePathname, useRouter } from "next/navigation";
import Link, { LinkProps } from "next/link";
import { fontBitMap, fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { useState } from "react";
import { motion } from "framer-motion";

export function MenuToggle({ items }: MainNavProps) {
    const [open, setOpen] = useState(false);
    const currentRoute = usePathname() || "/";

    return (
        <Sheet key="right" open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <button className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-8 w-8 lg:h-10 lg:w-10 hover:bg-background-highlights">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle theme</span>
                </button>
            </SheetTrigger>
            <SheetContent side="right">
                <MobileLink
                    href="/"
                    className="flex items-center justify-center"
                    onOpenChange={setOpen}
                >
                    <div className="flex flex-col items-center space-y-4 pb-8">
                        <div className="relative lg:hidden">
                            <Logo />
                        </div>
                    </div>
                </MobileLink>

                <SheetHeader>
                    <SheetDescription>
                    <div className="flex flex-col justify-center items-center gap-8">
                        {items?.map(
                            (item, index) =>
                                item.href && (
                                    <MobileLink
                                        key={index}
                                        href={item.href}
                                        data-active={currentRoute === item.href}
                                        onOpenChange={setOpen}
                                        className={cn(
                                            fontMono.className,
                                            `${currentRoute === item.href
                                                ? "flex items-center text-lg font-bold text-invert-accent-hightlights border-b-invert-accent-hightlights border-b-2"
                                                : "flex items-center text-lg  text-muted-foreground "
                                            }`,
                                        )}
                                    >
                                        {item.title}
                                    </MobileLink>
                                ),
                        )}

                        <Link
                            href="https://drive.google.com/file/d/16T02-bVEIz6guMlm2kYOdpGTdP84ObTE/view?usp=drivesdk"
                            target="_blank"
                        >
                            <motion.button
                                animate={{ scale: 1 }}
                                whileHover={{ scaleX: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className="bg-text-emphasis text-background-highlights px-6 py-2 rounded-full overflow-hidden transition-colors duration-700 border-text border-[2px]"
                            >
                                <span className={cn(fontBitMap.className, "text-xs uppercase")}>
                                    Resume
                                </span>
                            </motion.button>
                        </Link>
                    
                    </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}

interface MobileLinkProps extends LinkProps {
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
    className?: string;
    setHoveredPath?: React.Dispatch<React.SetStateAction<string>>;
    currentRoute?: string;
}

function MobileLink({
    href,
    onOpenChange,
    className,
    children,
    currentRoute,
    setHoveredPath,
    ...props
}: MobileLinkProps) {
    const router = useRouter();
    const handleMouseOver = () => {
        setHoveredPath?.(String(href)); // Ensure href is converted to a string
    };

    const handleMouseLeave = () => {
        setHoveredPath?.(String(currentRoute)); // Ensure currentRoute is converted to a string
    };

    return (
        <Link
            href={href}
            onClick={() => {
                router.push(href.toString());
                onOpenChange?.(false);
            }}
            className={cn(className)}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {children}
        </Link>
    );
}
