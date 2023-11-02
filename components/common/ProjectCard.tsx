"use client";
import Link from "next/link";
import React, { useRef } from "react";
import ImageSwiper from "./ImageSwiper";
import gsap from "gsap";
import Image from "next/image";

export const ProjectCard = () => {
  const lineRef = useRef<any>(null);
  const linkRef = useRef<any>(null);

  const mouseEnterProjectname = () => {
    gsap.fromTo(
      lineRef.current,
      {
        width: "0%",
        opacity: 0,
      },
      { width: "100%", opacity: 1, duration: 1 }
    );
  };
  const mouseLeaveProjectname = () => {
    gsap.fromTo(
      lineRef.current,
      {
        width: "100%",
        opacity: 1,
      },
      { width: "0%", opacity: 0, duration: 1 }
    );
  };

  const mouseEnterLink = () => {
    gsap.fromTo(
      linkRef.current,
      {
        width: "0%",
        opacity: 0,
      },
      { width: "100%", opacity: 1, duration: 1 }
    );
  };
  const mouseLeaveLink = () => {
    gsap.fromTo(
      linkRef.current,
      {
        width: "100%",
        opacity: 1,
      },
      { width: "0%", opacity: 0, duration: 1 }
    );
  };

  return (
    <div
      onMouseEnter={mouseEnterProjectname}
      onMouseLeave={mouseLeaveProjectname}
      className="w-full h-full flex flex-col gap-10 bg-black text-white animation-item ease p-10  rounded-lg group  hover:scale-110 hover:shadow-2xl transition duration-700 ease-out "
    >
      <div className="project-wrapper w-full h-full flex flex-col sm:flex-row gap-6 justify-between ">
        <div className="project-logo relative w-[60px] h-[60px] rounded-full bg-white overflow-hidden hover:cursor-pointer hover:scale-150 transition duration-700 ease-out">
          <Image src="/home/banner.jpg" fill alt="design" />
        </div>
        <div className="project-image-swiper w-full lg:w-[270px] h-[250px]   ">
          {/* Image swiper */}
          <ImageSwiper />
        </div>
      </div>

      <div className="project-details-wrapper flex flex-col gap-4">
        <h1 className="project-title  text-[42px] lg:text-[62px] font-semibold hover:cursor-pointer ">
          Project Name
        </h1>
        <div ref={lineRef} className="w-0 h-[2px] bg-white -mt-4"></div>
        <div className="project-site-details">
          <Link
            href={`/home`}
            className="project-site-name"
            onMouseEnter={mouseEnterLink}
            onMouseLeave={mouseLeaveLink}
          >
            www.example.com
          </Link>
          <div ref={linkRef} className="w-0 h-[2px] bg-white"></div>
        </div>
      </div>
    </div>
  );
};
