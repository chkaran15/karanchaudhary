"use client";
import { VideoSection } from "./BannerTextSection";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 2], [-distance, distance]);
}

function BannerSection() {
  const videoRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({ target: videoRef });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section ref={videoRef} className="relative w-full h-screen ">
      <div className="w-full h-full">
        <video
          className="hidden md:block w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="https://res.cloudinary.com/dftgrb9fb/video/upload/v1696534014/video_2160p_ix2a9g.mp4" />
        </video>
        <Image
          fill
          src="/home/homeImage.png"
          alt="banner"
          loading="lazy"
          className="md:hidden object-cover"
        />
        <VideoSection />
      </div>

      {/* <motion.div
        transition={{ duration: 1, delay: 1 }}
        initial={{ y: "10%" }}
        animate={{
          y: "0%",
          position: "absolute",
          // right: "2%",
          // bottom: "2%",
          boxShadow: "5px",
          backgroundColor: "white",
          borderRadius: "10px",
          // width: "400px",
          padding: "10px",
          opacity: 0.9,
        }}
        className="sm:w-[400px] md:right-6 md:bottom-6 z-10"
        style={{
          y,
        }}
      >
        <h1 className=" text-[18px] lg:text-lg font-semibold">
          We craft enchanting user experiences for startups and tech firms,
          aligning seamlessly with business needs, ensuring satisfaction, and
          fostering synergy.
        </h1>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl  font-bold w-[280px]">
            Full Stack <span className="text-gray-400">Developer :</span> Karan{" "}
            <span className="text-gray-400">Chaudhary</span>
          </h1>
          <Link href="/about" >
            <Image
              className=" rounded-full hover:opacity-50 hover:scale-90"
              src="/profile/profile.jpg"
              alt="karan"
              width={90}
              height={90}
              loading="lazy"
            />
          </Link>
        </div>
      </motion.div> */}

      <motion.div
        transition={{ duration: 2, delay: 0.2 }}
        initial={{
          x: "-300%",
        }}
        animate={{
          x: "0%",
        }}
        style={{
          y,
          background: "white",
          opacity: "0.8",
        }}
        className="banner-text-wrapper absolute m-2 md:right-6 bottom-6 sm:w-[400px]  p-[10px] shadow-md rounded-lg z-10"
      >
        {/* <div className="home-subtitle absolute px-[2%] flex flex-col gap-4 md:w-[450px]  "> */}
        <h1 className=" text-[18px] lg:text-lg font-semibold">
          We craft enchanting user experiences for startups and tech firms,
          aligning seamlessly with business needs, ensuring satisfaction, and
          fostering synergy.
        </h1>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl  font-bold w-[280px]">
            Full Stack <span className="text-gray-400">Developer :</span> Karan{" "}
            <span className="text-gray-400">Chaudhary</span>
          </h1>
          <Link href="/about">
            <Image
              className=" rounded-full hover:opacity-100  hover:border-t-4 hover:border-r-4 hover:border-purple-700 hover:scale-90"
              src="/profile/profile.jpg"
              alt="karan"
              width={90}
              height={90}
              loading="lazy"
            />
          </Link>
        </div>
        {/* </div> */}
      </motion.div>
    </section>
  );
}

export default BannerSection;
