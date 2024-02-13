import { JetBrains_Mono as FontMono, Inter as FontSans, Lora, Merriweather, Montserrat, Press_Start_2P } from "next/font/google"
import FontHackNerd from "next/font/local"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontMont = Montserrat({
    subsets: ["latin"],
    variable: "--font-mont",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const fontNerd = FontHackNerd({
    src: "../public/fonts/Hack-NF.ttf",
    display: "swap"
})

export const fontSerif = Merriweather({
    subsets: ["latin"],
    variable: "--font-serif",
    weight: ["300", "400", "700"],
})

export const fontLora = Lora({
    subsets: ["latin"],
    variable: "--font-lora",
})

export const fontBitMap = Press_Start_2P({
    subsets: ["latin"],
    variable: "--font-bitmap",
    weight: ["400"]
})
