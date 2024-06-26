"use client";

import { fontBitMap, fontNerd } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Terminal() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<any>([]);
  const terminalRef = useRef<HTMLDivElement>(null); // For automatic scrolling
  const inputRef = useRef<HTMLInputElement>(null); // For input element reference
  const [isClear, setClear] = useState(true);

  useEffect(() => {
    if (isClear) {
      setOutput([]);
    }
  }, [command]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  }, []);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (event: any) => {
    setCommand(event.target.value);
  };
  const path = usePathname();
  const handleKeyDown = (event: any) => {
    switch (command.toLowerCase()) {
      case "resume":
        window.open(
          "https://drive.google.com/file/d/16T02-bVEIz6guMlm2kYOdpGTdP84ObTE/view?usp=drivesdk",
        );
        break;
      case "clear":
        setClear(true);
        break;
      default:
        setClear(false);
    }
    if (event.key === "Enter") {
      // Process the command
      let newOutput = processCommand(command);
      setOutput([...output, newOutput]);
      scrollTerminalToBottom();

      // Clear the input field
      setCommand("");
      setTimeout(scrollTerminalToBottom, 0);
    }
  };

  const scrollTerminalToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  const processCommand = (command: string) => {
    switch (command.toLowerCase()) {
      case "help":
        return (
          <div>
            <div>help - Displays a list of available commands</div>
            <div>clear - Clears the terminal</div>
            <div>about - About me</div>
            <div>resume - My Updated Resume</div>
            <div>socials - Socials to Contact</div>
          </div>
        );
      case "about":
        return (
          <div>
            I'm Hemram Kumarapu a Full Stack Developer based in India, Currently
            pursuing Bachelor of Technology in Information Technology at NIT
            Raipur India
          </div>
        );
      case "socials":
        return (
          <div>
            <div>
              Github:{" "}
              <Link
                className="underline text-[#268BD2]"
                href="https://github.com/kuheram777"
              >
                https://github.com/kuheram777
              </Link>
            </div>
            <div>
              Linkedin:{" "}
              <Link
                className="underline text-[#268BD2]"
                href="https://www.linkedin.com/in/hemram-kumarapu-440859214/"
              >
                https://www.linkedin.com/in/hemram-kumarapu-440859214/
              </Link>
            </div>
            <div>
              Email:{" "}
              <Link
                className="underline text-[#268BD2]"
                href="mailto:kuheram777@gmail.com"
              >
                kuheram777@gmail.com
              </Link>
            </div>
          </div>
        );
      case "resume":
        return <div>Navigating to resume...</div>;
      // ... Add other command cases
      case "clear":
        return "";
      default:
        return <div>bash: {command}: command not found</div>;
    }
  };

  return (
    <div
      className={cn(
        fontNerd.className,
        "bg-background text-text p-[1.5em] text-xs transition-all duration-700 rounded-xl h-[40vh] overflow-y-auto",
      )}
      ref={terminalRef}
      onClick={handleClick}
    >
      <div className="mb-[1em]">
        <div>
          <h1
            className={cn(
              fontBitMap.className,
              "text-lg xl:text-4xl font-black uppercase",
            )}
          >
            Terminal
          </h1>
        </div>
        <div className="md:block hidden">Type 'help' to see the list of available commands.</div>
        <div className="md:hidden">Tap below and Type 'help' to see the list of available commands.</div>
        {output.map((item: any, index: any) => (
          <div className="mb-[0.2em]" key={index}>
            <h1 className={cn(fontNerd.className, "mb-[0.1em] text-sm")}>
              <span className="text-[#859900]">hemram@H4-MM-3R</span>:
              <span className="text-[#268BD2]">~</span>{" "}
              <span className="text-[#268BD2]">{path}</span>
            </h1>
            {item}
          </div>
        ))}
      </div>
      <div className="flex w-full justify-start">
        <h1 className="w-fit">
          <span className="text-[#859900]">hemram@H4-MM-3R</span>:
          <span className="text-[#268BD2]">~</span>
          {""}
          <span className="text-[#268BD2]">{path}</span>
        </h1>
        <input
          ref={inputRef}
          className="outline-none text-text bg-background transition-all duration-700 w-[154px] pl-2"
          value={command}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="h-[10vh]" />
    </div>
  );
}
