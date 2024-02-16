"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Icons } from "./icons";
import { ThemeToggle } from "./theme-toggle";

export function LinksNav() {
   return(
          <nav className="flex items-center space-x-1 z-50">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
              >
                <Icons.linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>

   ) 
}
