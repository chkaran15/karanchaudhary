"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ImageWrapper = () => {
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
        start: "top 500px",
        end: "+=400px",
        // markers: true,
      },
      width: "100%",
      height: "100vh",
      objectFit: "cover",
      y: -150,
      scaleY: 2,
    });
  }, []);

  return (
    <section
      ref={aboutRef}
      className="about-section-wrapper w-full relative h-screen overflow-hidden"
    >
      <div
        ref={moveRef}
        className="about-buttom  w-[20%] h-[20vh] scale-1 top-0 absolute left-[50%]  translate-x-[-50%] "
      >
        <video
          className="w-full h-full object-cover "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://res.cloudinary.com/dftgrb9fb/video/upload/v1696534014/video_2160p_ix2a9g.mp4" />
        </video>
      </div>
    </section>
  );
};
