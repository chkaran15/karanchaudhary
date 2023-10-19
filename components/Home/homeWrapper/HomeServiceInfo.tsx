"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export const HomeServiceInfo = () => {
  let [projectCount, setProjectCount] = React.useState(0);
  let [collaborationCount, setCollaborationCount] = React.useState(0);

  function increaseCount(num: number) {
    if (projectCount < num) {
      projectCount = projectCount + 1;
      setProjectCount(projectCount);
      setTimeout(() => {
        increaseCount(num);
      }, 100);
    } else {
      return;
    }
  }

  function increaseCountNumber(num: number) {
    if (collaborationCount < num) {
      collaborationCount = collaborationCount + 1;
      setCollaborationCount(collaborationCount);
      setTimeout(() => {
        increaseCountNumber(num);
      }, 100);
    } else {
      return;
    }
  }

  const infoRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);
  const itemRef = useRef(null);
  const item1Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const infotl = gsap.timeline({
      scrollTrigger: {
        trigger: infoRef.current,
        scrub: 1,
        start: "top 700px",
        end: "+=200px",
        // markers: true,
      },
    });

    infotl.to(titleRef.current, {
      duration: 0.3,
      opacity: 1,
      y: 0,
    });

    const itemtl = gsap.timeline({
      scrollTrigger: {
        trigger: infoRef.current,
        scrub: 1,
        start: "top 600px",
        end: "+=200px",
        onToggle: () => {
          increaseCount(50);
          increaseCountNumber(60);
        },
      },
    });

    itemtl.to(itemRef.current, {
      duration: 0.3,
      opacity: 1,
      y: 0,
    });
    itemtl.to(item1Ref.current, {
      duration: 0.3,
      opacity: 1,
      y: 0,
    });

    const texttl = gsap.timeline({
      scrollTrigger: {
        trigger: infoRef.current,
        scrub: 1,
        start: "top 500px",
        end: "+=400px",
      },
    });

    itemtl.fromTo(
      textRef.current,
      {
        opacity: 0,
        x: 100,
      },
      { duration: 1, delay: 0.5, opacity: 1, x: 0 }
    );
  }, []);

  return (
    <section
      ref={infoRef}
      className="about-section-wrapper relative w-full  px-[5%] border border-red-500 pb-[5%] "
    >
      <div ref={titleRef} className=" text-[80px] opacity-0 translate-y-10">
        Project and Collaboration
      </div>
      <div className="about-wrapper flex flex-col pt-10 md:flex-row gap-20 px-[3%]  ">
        <div className="about-left-wrapper text-[28px] md:text-[40px] md:w-[60%]">
          <h1
            ref={itemRef}
            className="text-[60px] md:text-[80px] opacity-0 translate-y-10 flex items-center gap-2"
          >
            {projectCount}
            {"+"}
            <span className="text-base">completed projects</span>
          </h1>
          <h1
            ref={item1Ref}
            className="text-[60px] md:text-[80px] opacity-0 translate-y-10 flex items-center gap-2"
          >
            {collaborationCount}
            {"+"}
            <span className="text-base">collaborations</span>
          </h1>
        </div>
        <div
          ref={textRef}
          className="about-right-wrapper text-base lg:text-[30px] lg:leading-8 lg:trackling-normal lg:w-[45%]"
        >
          <h1>
            {/* I'm excelled in numerous projects, and my achievements are
            well-documented in my extensive portfolio of case studies. I have
            the evidence to demonstrate my expertise and successful outcomes. */}
            I excel in diverse projects, showcasing expertise through
            collaborations and solo endeavors. Extensive case studies document
            my achievements, offering evidence of successful outcomes and
            innovative problem-solving. Explore my portfolio for proof.
          </h1>
        </div>
      </div>
    </section>
  );
};
