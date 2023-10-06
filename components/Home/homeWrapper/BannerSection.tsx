"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export const BannerSection = () => {
  const videoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: videoRef,
  });
  const y = useParallax(scrollYProgress, 700);

  return (
    <div className="banner-section-wrapper flex  relative w-full h-screen justify-center items-center overflow-hidden ">
      <div ref={videoRef}>
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          placeholder="blur"
        >
          <source src="https://res.cloudinary.com/dftgrb9fb/video/upload/v1696534014/video_2160p_ix2a9g.mp4" />
        </video>
      </div>
      <motion.h1
        transition={{ duration: 1, delay: 1 }}
        initial={{ y: "-70%", x: "-70%" }}
        animate={{ y: "20%", x: "5%" }}
        className="absolute top-[10%] md:w-[650px]  left-5 text-4xl md:text-6xl font-extrabold"
      >
        <span className="text-gray-500">Creative</span> Design Implementation &{" "}
        <span className="text-gray-500">Web</span> Development{" "}
        <span className="text-gray-500">Experiences</span>.
      </motion.h1>

      <motion.div
        transition={{ duration: 1, delay: 1 }}
        initial={{ y: "-30%" }}
        animate={{
          y: "-10%",
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
        className="sm:w-[400px] md:right-6 md:bottom-6"
        style={{
          y,
        }}
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
          <Link href="/aboutme">
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
        {/* </div> */}
      </motion.div>
    </div>
  );
};
