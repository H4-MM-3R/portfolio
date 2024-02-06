import { fontMont, fontSans } from "@/lib/fonts";
import clsx from "clsx";

export default function Home() {
  return (
    <div>
      <div className="h-[20vh]"></div>
      <div className="flex justify-around">
        <div className="rounded-xl w-[40vw] h-[400px] dark:shadow-white shadow-md border-[2px]">
          <h1>hello</h1>
        </div>
        <div className="rounded-xl w-[40vw] h-[400px] shadow-md dark:shadow-white border-[2px]">
        </div>
      </div>
      <div className="h-[100vh]"></div>
      <div>
      <h1 className={clsx(fontMont.className, "text-5xl font-bold")}>Hello</h1>
      <h1 className="text-5xl font-bold">Hello</h1>
      </div>
    </div>
  );
}
