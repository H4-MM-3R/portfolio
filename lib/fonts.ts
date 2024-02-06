import { JetBrains_Mono as FontMono, Inter as FontSans, Montserrat, Montserrat_Alternates } from "next/font/google"

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
