"use client";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const HomeAboutSection = () => {
  const aboutRef = useRef<any>(null);
  const moveRef = useRef<any>(null);

  const textRef = useRef<any>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        scrub: 1,
        start: "top 200px",
        end: "+=500px",
        // markers: true,
      },
    });

    tl.to(moveRef.current, {
      duration: 1.5,
      opacity: 1,
      position: "absolute",
      bottom: "0",
    });

    gsap.fromTo(
      ".text-right",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 2 }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 150 },
      { opacity: 1, y: 0, duration: 2, delay: 0.5 }
    );

    // Move the moveRef element upward
    gsap.to(moveRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        scrub: 1,
        start: "top 200px",
        end: "+=400px",
        // markers: true,
      },
      y: -600, // adjust this value based on how much you want the element to move upward
    });
  }, []);

  return (
    <section
      ref={aboutRef}
      className="about-section-wrapper relative py-[8%]  w-full flex justify-center items-center  px-[5%]"
    >
      <div className="about-wrapper flex flex-col gap-20  ">
        <div className="text-[80px]">About</div>
        <div className="flex flex-col lg:flex-row gap-20 justify-between px-[3%]">
          <div className="about-left-wrapper text-[28px] md:text-[50px] lg:w-[60%] ">
            <h1 className="text-right">
              Helping brands to stand out in the digital era. Together we will
              set the new status quo. No nonsense, always on the cutting edge.
            </h1>
          </div>
          <div className="about-right-wrapper text-base md:text-[25px] tracking-normal leading-10 lg:w-[30%]">
            <h1 ref={textRef}>
              The combination of my passion for design, code & interaction
              positions me in a unique place in the web design world.
            </h1>
          </div>
        </div>
      </div>

      <div
        ref={moveRef}
        className="about-buttom absolute bottom-0  left-[50%] lg:left-[70%] translate-x-[-50%] lg:translate-x-[-30%] flex justify-center items-center w-[150px] h-[150px] rounded-full bg-black text-white cursor-pointer"
      >
        <Link href={"/about"}>About me</Link>
      </div>
    </section>
  );
};
