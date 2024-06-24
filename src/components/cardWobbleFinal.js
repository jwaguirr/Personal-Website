"use client";
import React from "react";
import { WobbleCard } from "./ui/card-wobble";

export default function WobbleCardDemo() {
  return (
    <>
    <div className="text-7xl font-bold italic text-center mt-48 font-reddit py-10 dark:text-[#EAE3D2] text-[##4B3F3A]">Projects</div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full font-reddit">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-[#7A2424] dark:bg-[#642020] duration-500 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Room Automation
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            When I was in highschool, I decided to automate my room...
          </p>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          StockFin
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          A personalized AI financial assistant. 
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 dark:bg-[#142743] min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Servery (Current)
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            A recipie app that uses ML, Social Network, and much more!
          </p>
        </div>
      </WobbleCard>
    </div>
    </>
  );
}
