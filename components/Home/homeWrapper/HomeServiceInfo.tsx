"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

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

  useEffect(() => {
    increaseCount(50);
  }, []);

  useEffect(() => {
    increaseCountNumber(60);
  }, []);

  return (
    <section className="about-section-wrapper relative w-full  px-[5%] ">
      <h1 className=" text-[50px] md:text-[100px]">
        Project and Collaboration
      </h1>
      <div className="about-wrapper flex flex-col pt-10 md:flex-row gap-20 px-[3%]  ">
        <div className="about-left-wrapper text-[28px] md:text-[40px] md:w-[60%]">
          <h1 className="text-[60px] md:text-[80px]  flex items-center gap-2">
            {projectCount}
            {"+"}
            <span className="text-base">completed projects</span>
          </h1>
          <h1 className="text-[60px] md:text-[80px]  flex items-center gap-2">
            {collaborationCount}
            {"+"}
            <span className="text-base">collaborations</span>
          </h1>
        </div>
        <div className="about-right-wrapper text-base lg:text-[30px] lg:leading-8 lg:trackling-normal lg:w-[45%]">
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
