/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HomeServiceInfo } from "./HomeServiceInfo";

export default function HomeWrapperAnimaiton() {
  const growRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const growTl = gsap.timeline({
      scrollTrigger: {
        trigger: growRef.current,
        scrub: 1,
        pin: true,
        start: "top center",
        end: "+=200px",
        ease: "power2.inOut",

        // markers: true,
      },
    });

    growTl.to(growRef.current, {
      duration: 2.5,
      scale: 1,
      pin: true,
      y: 0,
    //   height: "100vh",
    //   maxheight: "100vh",
      ease: "power2.inOut",
      // markers: true,
    //   position: "fixed",
    //   top: "0px",
    });

    growTl.to(
      taglineRef.current,
      {
        duration: 1,
        delay: 1,
        opacity: 1,
        y: 0,
        markers: true,
        // left: "50%",
        // transform: "translateX(-50%)",
      },
      "<"
    );
  }, []);

  return (
    <>
      <div className="header relative w-full flex justify-center items-center text-3xl overflow-hidden ">
        <div className="absolute top-5 left-0">
          <HomeServiceInfo />
        </div>
        <div className="image relative flex justify-center items-center ">
          {/* <div className="w-full "> */}
            <img
              ref={growRef}
              id="grow"
              src="/home/homeImage.png"
              alt="Random"
              className="w-full object-cover transform scale-0"
            />
          {/* </div> */}
          {/* <div className="flex gap-2 items-center "> */}
          <h1
              ref={taglineRef}
              // className="tagline absolute opacity-0 text-white top-1/2 transform translate-y-[500px]"
              className="tagline absolute opacity-0 text-white top-1/2 left-[-10%] transform"
            >
              this is the tagline
            </h1>
          {/* <h1
              ref={taglineRef}
              // className="tagline absolute opacity-0 text-white top-1/2 transform translate-y-[500px]"
              className="tagline absolute opacity-0 text-white top-1/2 right-[-10%] transform"
            >
              this is the tagline2
            </h1> */}
          {/* </div> */}
          {/* <KiteAnimation /> */}
          {/* <div
            ref={taglineRef}
            className="absolute left-[50%] transform top-1/2 translate-x-[-50%] flex gap-2 items-center opacity-0 text-white"
          >
            <h1>Happy</h1>
            <h1>Dashain</h1>
          </div> */}
        </div>
      </div>
    </>
  );
}
