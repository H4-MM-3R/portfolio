"use client";

import FooterTerminal from "./terminal/footer-terminal";

export function Footer() {
    return (
        <footer className="w-full relative hidden sm:block">
        <hr className="border-text"/>
        <div className="flex justify-center items-center h-[400px]">
            <FooterTerminal />
        </div>
            <div className="h-[1vh]"></div>
        </footer>
    );
}
