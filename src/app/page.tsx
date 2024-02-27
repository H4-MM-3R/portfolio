"use client";

import PageTransiton from "../components/page-transition";
import { PinContainer } from "../components/ui/hover-card";
export default function Home() {
  return (
    <PageTransiton className="container">
      <div className="h-[20vh]"></div>
      <h1>Typewriter Effect</h1>
      <div className="flex justify-center "></div>
      <div className="h-[100vh]"></div>
    </PageTransiton>
  );
}
