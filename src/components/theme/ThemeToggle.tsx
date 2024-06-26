"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    return (
        <button
            className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-8 w-8 lg:h-10 lg:w-10 hover:bg-background-highlights border-text-secondary border-[2px] duration-700 overflow-hidden"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            <motion.div
                className="relative w-full h-full flex justify-center items-center flex-wrap mt-2 lg:mt-3 space-y-1 lg:space-y-2"
                animate={{ top: theme === "light" ? "-85%" : "0%" }}
            >
                <Moon className="h-5 w-5 lg:h-6 lg:w-6 text-invert-accent-hightlights" />
                <Sun className="h-5 w-5 lg:h-6 lg:w-6 text-invert-accent-hightlights" />
            </motion.div>
        </button>
    );
}
