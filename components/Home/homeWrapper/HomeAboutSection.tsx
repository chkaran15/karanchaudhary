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
  const titleRef = useRef<any>(null);
  const infoRef = useRef<any>(null);
  const leftRef = useRef<any>(null);
  const rightRef = useRef<any>(null);

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

    const textl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        scrub: 1,
        start: "top 700px",
        end: "+=200px",
        // markers: true,
      },
    });

    textl.to(titleRef.current, {
      duration: 0.3,
      opacity: 1,
      y: 0,
    });

    const infotl = gsap.timeline({
      scrollTrigger: {
        trigger: infoRef.current,
        scrub: 1,
        start: "top 700px",
        end: "+=200px",
        // markers: true,
      },
    });

    infotl.fromTo(
      leftRef.current,
      {
        opacity: 0,
        x: -100,
      },
      { duration: 0.5, opacity: 1, x: 0 }
    );

    infotl.fromTo(
      rightRef.current,
      {
        opacity: 0,
        x: 100,
      },
      { duration: 0.5, opacity: 1, x: 0 }
    );
  }, []);

  return (
    <section
      ref={aboutRef}
      className="about-section-wrapper relative py-[8%]  w-full flex justify-center items-center px-4 lg:px-10 "
    >
      <div ref={textRef} className="about-wrapper flex flex-col gap-20  ">
        <div ref={titleRef} className="text-[80px] opacity-0 translate-y-10 ">
          About
        </div>
        <div
          ref={infoRef}
          className="flex flex-col lg:flex-row gap-20 justify-between"
        >
          <div
            ref={leftRef}
            className="about-left-wrapper  text-[28px] md:text-[50px] lg:w-[60%] "
          >
            <h1 className="text-right">
              Helping brands to stand out in the digital era. Together we will
              set the new status quo. No nonsense, always on the cutting edge.
            </h1>
          </div>
          <div
            ref={rightRef}
            className="about-right-wrapper  text-base md:text-[25px] tracking-normal leading-10 lg:w-[30%]"
          >
            <h1 className="text-left">
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
        <Link href={"/about"}>Click me</Link>
      </div>
    </section>
  );
};
