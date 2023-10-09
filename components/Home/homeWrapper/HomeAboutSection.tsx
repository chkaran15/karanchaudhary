"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 2], [-distance, distance]);
}

export const HomeAboutSection = () => {
  const aboutRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({ target: aboutRef });

  const y = useParallax(scrollYProgress, 500);

  return (
    <section
      ref={aboutRef}
      className="about-section-wrapper relative py-[8%]  w-full bg-primary1 flex justify-center items-center border-t border-purple-900 px-[5%]"
    >
      <div className="about-wrapper flex flex-col lg:flex-row gap-20 justify-between px-[3%] text-white ">
        <div className="about-left-wrapper text-[28px] md:text-[50px] lg:w-[60%] ">
          <h1>
            Helping brands to stand out in the digital era. Together we will set
            the new status quo. No nonsense, always on the cutting edge.
          </h1>
        </div>
        <div className="about-right-wrapper text-base md:text-[25px] tracking-normal leading-10 lg:w-[30%]">
          <h1>
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world.
          </h1>
        </div>
      </div>

      <motion.div
        transition={{ duration: 3 }}
        style={{
          y,
        }}
        className="about-buttom absolute bottom-0  left-[50%] lg:left-[70%] translate-x-[-50%] lg:translate-x-[-30%] flex justify-center items-center w-[150px] h-[150px] rounded-full bg-purple-700 text-white"
      >
        <Link href={"/about"}>About me</Link>
      </motion.div>
    </section>
  );
};
