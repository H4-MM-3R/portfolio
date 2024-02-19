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
import { fontMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export function MenuToggle({ items }: MainNavProps) {
    const currentRoute = usePathname() || "/";

  return (
    <Sheet key="left">
      <SheetTrigger asChild>
        <button className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-8 w-8 lg:h-10 lg:w-10 hover:bg-background-highlights">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </SheetTrigger>
      <SheetContent side="left">
            <MobileLink
              href="/"
              className="flex items-center justify-center"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="relative lg:hidden">
                <Logo/>
                </div>
              </div>
            </MobileLink>

        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    data-active={currentRoute === item.href}
                    className={cn(
                      fontMono.className,
                      `${
                        currentRoute === item.href
                          ? "flex items-center text-lg font-bold text-cyan"
                          : "flex items-center text-lg font-bold text-muted-foreground hover:text-[#2aa198] transition-all duration-700"
                      }`,
                    )}
                  >
                    {item.title}
                  </Link>
                ),
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}



interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
  setHoveredPath?: React.Dispatch<React.SetStateAction<string>>
  currentRoute?: string
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
  const router = useRouter()
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
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Link>
  )
}

