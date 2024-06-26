import { siteConfig } from '@/config/site'
import { fontBitMap } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import React from 'react'
import Link from 'next/link'
import { Logo } from './Logo'
import { Navbar } from './Navbar'
import { ThemeToggle } from './theme/ThemeToggle'

export default function MainHeader() {
    return (
            <motion.header className="w-screen items-center justify-center fixed top-8 z-40 hidden lg:flex">
                <div className="bg-background relative border-text border-[2px] w-[75vw] rounded-full transition-colors duration-700">
                    <div className="flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 mx-8 ">
                        <Logo />
                        <Navbar items={siteConfig.mainNav} />
                        <div className="space-x-4 flex justify-center items-center">
                            <Link
                                href="https://drive.google.com/file/d/16T02-bVEIz6guMlm2kYOdpGTdP84ObTE/view?usp=drivesdk"
                                target="_blank"
                            >
                               <motion.button
                                    animate={{ scale: 1 }}
                                    whileHover={{ scaleX: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    className="bg-invert-accent-hightlights text-background px-6 py-2 rounded-full overflow-hidden transition-colors duration-700 border-text border-[2px]"
                                >
                                    <span className={cn(fontBitMap.className, "text-xs uppercase")}>
                                        Resume
                                    </span>
                                </motion.button>
                            </Link>
                            <ThemeToggle />
                        </div>

                    </div>
                </div>
            </motion.header>
    )
}
