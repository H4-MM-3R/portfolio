"use client"

import Terminal from "../components/terminal/terminal";
export default function Home() {
    return (
        <div>
            <div className="h-[20vh]"></div>
            <div className="flex justify-center">
                <div className="rounded-xl w-[40vw] h-[70vh] border-[2px]">
                <Terminal />
                </div>
            </div>
            <div className="h-[100vh]"></div>
        </div>
    );
}

