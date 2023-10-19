"use client";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export const BannerTextSection = () => {
  const textRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const text4Ref = useRef(null);
  const text5Ref = useRef(null);

  useEffect(() => {
    // gsap.fromTo(

    // )

    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.2,
      }
    );

    gsap.fromTo(
      text1Ref.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.3,
      }
    );
    gsap.fromTo(
      text2Ref.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.4,
      }
    );
    gsap.fromTo(
      text3Ref.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
      }
    );
    gsap.fromTo(
      text4Ref.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.6,
      }
    );
    gsap.fromTo(
      text5Ref.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.7,
      }
    );
  }, []);

  return (
    <div className="w-[60%] ">
      <h1 className="progress relative  text-4xl md:text-[60px] font-normal trackling-normal  uppercase flex flex-wrap gap-3 ">
        {/* A Creative Design Implementation & web Development Experiences */}
        <span ref={textRef} className="text opacity-0 ">
          A
        </span>
        <span ref={text1Ref} className="text  opacity-0 ">
          Creative
        </span>
        <span ref={text2Ref} className="text opacity-0 ">
          Design
        </span>
        {/* <div ref={textRef} className="text  ">Implementation</div>
        <div ref={textRef} className="text  ">&</div> */}
        <span ref={text3Ref} className="text opacity-0 ">
          web
        </span>
        <span ref={text4Ref} className="text opacity-0 ">
          Development
        </span>
        <span ref={text5Ref} className="text opacity-0 ">
          Experience
        </span>
      </h1>
    </div>
  );
};
