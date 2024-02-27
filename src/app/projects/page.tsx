"use client";
import PageTransiton from "@/src/components/page-transition";
import { PinContainer } from "@/src/components/ui/hover-card";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <div className="h-[20vh]"></div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 h-[300vh] xl:h-[112vh]">
        <PinContainer
          title="H4-MM-3R/Portfolio"
          href="https://github.com/h4-mm-3r/portfolio"
        >
        <div className="lg:w-[25vw] lg:h-[40vh] w-[70vw] h-[40vh] ">
          <div className="w-[70vw] h-[20vh] relative">
            <Image src="/blog/testing.jpg" alt="Aceternity UI" fill={true} />
          </div>
          <h3 className="hidden sm:block md:hidden max-w-xs pb-2 m-0 font-bold text-base text-text-emphasis">
            SM
          </h3>
          <h3 className="hidden md:block lg:hidden max-w-xs pb-2 m-0 font-bold text-base text-text-emphasis">
            MD
          </h3>
          <h3 className="hidden lg:block xl:hidden max-w-xs pb-2 m-0 font-bold text-base text-text-emphasis">
            LG
          </h3>
          <h3 className="hidden xl:block max-w-xs pb-2 m-0 font-bold text-base text-text-emphasis">
            XL
          </h3>
        </div>
        </PinContainer>
        <PinContainer
          title="H4-MM-3R/Portfolio"
          href="https://github.com/h4-mm-3r/portfolio"
        >
        <div className="lg:w-[25vw] lg:h-[40vh] w-[70vw] h-[40vh] ">
          <div className="w-[70vw] h-[20vh] relative">
            <Image src="/blog/testing.jpg" alt="Aceternity UI" fill={true} />
          </div>
          <h3 className="hidden sm:block md:hidden max-w-xs pb-2 m-0 font-bold text-base text-text-emphasis">
            SM
          </h3>
          <h3 className="hidden md:block lg:hidden max-w-xs pb-2 m-0 font-bold text-base text-text-emphasis">
            MD
          </h3>
          <h3 className="hidden lg:block xl:hidden max-w-xs pb-2 m-0 font-bold text-base text-text-emphasis">
            LG
          </h3>
          <h3 className="hidden xl:block max-w-xs pb-2 m-0 font-bold text-base text-text-emphasis">
            XL
          </h3>
        </div>
        </PinContainer>
        <PinContainer
          title="H4-MM-3R/Portfolio"
          href="https://github.com/h4-mm-3r/portfolio"
        >
        <div className="lg:w-[25vw] lg:h-[40vh] w-[70vw] h-[40vh] ">
          <div className="w-[70vw] h-[20vh] relative">
            <Image src="/blog/testing.jpg" alt="Aceternity UI" fill={true} />
          </div>
          <h3 className="hidden sm:block md:hidden max-w-xs pb-2 m-0 font-bold text-base text-text-emphasis">
            SM
          </h3>
          <h3 className="hidden md:block lg:hidden max-w-xs pb-2 m-0 font-bold text-base text-text-emphasis">
            MD
          </h3>
          <h3 className="hidden lg:block xl:hidden max-w-xs pb-2 m-0 font-bold text-base text-text-emphasis">
            LG
          </h3>
          <h3 className="hidden xl:block max-w-xs pb-2 m-0 font-bold text-base text-text-emphasis">
            XL
          </h3>
        </div>
        </PinContainer>
        <PinContainer
          title="H4-MM-3R/Portfolio"
          href="https://github.com/h4-mm-3r/portfolio"
        >
        <div className="lg:w-[25vw] lg:h-[40vh] w-[70vw] h-[40vh] ">
          <div className="w-[70vw] h-[20vh] relative">
            <Image src="/blog/testing.jpg" alt="Aceternity UI" fill={true} />
          </div>
          <h3 className="hidden sm:block md:hidden max-w-xs pb-2 m-0 font-bold text-base text-text-emphasis">
            SM
          </h3>
          <h3 className="hidden md:block lg:hidden max-w-xs pb-2 m-0 font-bold text-base text-text-emphasis">
            MD
          </h3>
          <h3 className="hidden lg:block xl:hidden max-w-xs pb-2 m-0 font-bold text-base text-text-emphasis">
            LG
          </h3>
          <h3 className="hidden xl:block max-w-xs pb-2 m-0 font-bold text-base text-text-emphasis">
            XL
          </h3>
        </div>
        </PinContainer>
        <PinContainer
          title="H4-MM-3R/Portfolio"
          href="https://github.com/h4-mm-3r/portfolio"
        >
        <div className="lg:w-[25vw] lg:h-[40vh] w-[70vw] h-[40vh] ">
          <div className="w-[70vw] h-[20vh] relative">
            <Image src="/blog/testing.jpg" alt="Aceternity UI" fill={true} />
          </div>
          <h3 className="hidden sm:block md:hidden max-w-xs pb-2 m-0 font-bold text-base text-text-emphasis">
            SM
          </h3>
          <h3 className="hidden md:block lg:hidden max-w-xs pb-2 m-0 font-bold text-base text-text-emphasis">
            MD
          </h3>
          <h3 className="hidden lg:block xl:hidden max-w-xs pb-2 m-0 font-bold text-base text-text-emphasis">
            LG
          </h3>
          <h3 className="hidden xl:block max-w-xs pb-2 m-0 font-bold text-base text-text-emphasis">
            XL
          </h3>
        </div>
        </PinContainer>
      </div>
    </div>
  );
}
