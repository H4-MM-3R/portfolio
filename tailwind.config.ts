import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                background: {
                    DEFAULT: "var(--background)",
                    highlights: "var(--background-highlights)",
                },
                text: {
                    DEFAULT: "var(--text)",
                    emphasis: "var(--text-emphasis)",
                    secondary: "var(--text-secondary)",
                },
                invert: {
                    accent: "var(--invert-accent)",
                    "accent-hightlights": "var(--invert-accent-hightlights)",
                },
                red: "var(--red)",
                blue: "var(--blue)",
                yellow: "var(--yellow)",
                magenta: "var(--magenta)",
                cyan: "var(--cyan)",
                violet: "var(--violet)",
                green: "var(--green)",
                orange: "",
            },
            borderRadius: {
                lg: `var(--radius)`,
                md: `calc(var(--radius) - 2px)`,
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            transitionTimingFunction: {
                'ease-in-out-quad': 'cubic-bezier(.76,0,.24,1)'
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
