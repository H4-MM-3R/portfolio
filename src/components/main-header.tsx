import { siteConfig } from '@/config/site'
import { fontBitMap } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import React from 'react'
import { Logo } from './logo'
import { Nav } from './nav'
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

export default function MainHeader() {
  return (
    <div>
      <div className="bg-background relative border-text border-[2px] w-[75vw] rounded-full transition-colors duration-500 ">
        <div className="flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 mx-8 ">
          <Logo />
          <Nav items={siteConfig.mainNav} />
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
                className="bg-text-emphasis text-background-highlights px-6 py-2 rounded-full overflow-hidden transition-colors duration-500 border-text border-[2px]"
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
    
    
    </div>
  )
}
