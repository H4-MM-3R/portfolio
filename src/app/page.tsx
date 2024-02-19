"use client"

import Terminal from "../components/terminal/terminal";
export default function Home() {
    return (
        <div>
            <div className="h-[20vh]"></div>
            <div className="flex justify-center ">
                <div className="rounded-xl w-[93vw] md:w-[62vw] lg:w-[68vw] xl:w-[72vw] h-[70vh] bg-background transition-colors duration-500 shadow-2xl">
                <Terminal />
                </div>
            </div>
            <div className="h-[100vh]"></div>
        </div>
    );
}

