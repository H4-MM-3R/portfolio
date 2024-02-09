import { fontMono, fontMont, fontSans } from "@/lib/fonts";
import clsx from "clsx";
import Terminal from "../components/terminal/terminal";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export default function Home() {
    return (
        <div>
            <div className="h-[20vh]"></div>
            <div className="flex justify-around">
                <div className="rounded-xl w-[40vw] h-[400px] border-[2px] bg-background text-center items-center flex flex-col justify-center space-y-8">
                    <h1 className={clsx(GeistSans.className, "text-4xl font-black text-muted-foreground")}>I am Kumarapu <span className={clsx(GeistSans.className, "font-black text-accent-foreground")}>Hemram</span></h1>
                    <h1 className={clsx(GeistMono.className, "text-sm")}>I am a Full Stack Developer based in India</h1>

                </div>
                <div className="rounded-xl w-[40vw] h-[70vh] border-[2px]">
                <Terminal />
                </div>
            </div>
            <div className="h-[100vh]"></div>
        </div>
    );
}
