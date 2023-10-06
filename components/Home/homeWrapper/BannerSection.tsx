"use client";
import { VideoSection } from "./BannerTextSection";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 0.5], [-distance, distance]);
}

function BannerSection() {
  const videoRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({ target: videoRef });
  const y = useParallax(scrollYProgress, -400);

  return (
    <section className="relative w-full h-screen ">
      <div className="w-full h-full">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src="https://res.cloudinary.com/dftgrb9fb/video/upload/v1696534014/video_2160p_ix2a9g.mp4" />
        </video>
      </div>
      <VideoSection />

      <div className="absolute top-[50%] translate-y-[-50%] right-16 hidden lg:block">
        {/* <div className="relative  w-[420px]  h-[800px] shadow-2xl rounded-lg overflow-hidden bg-transparent">
          <Image src="/phone.png" fill alt="design" />
          <iframe
            src="https://v2-potfolio--fancy-lebkuchen-7321da.netlify.app/"
            className="z-10 absolute w-full h-full "
          />
        </div> */}
        <div className="w-full h-full ">
          <video
            className="w-[40vw] lg:w-[40vw] xl:w-[60vw] h-[70vh] rounded-lg opacity-80 shadow-2xl object-cover"
            autoPlay
            loop
            muted
          >
            <source src="https://res.cloudinary.com/dftgrb9fb/video/upload/v1696534014/video_2160p_ix2a9g.mp4" />
          </video>
        </div>
      </div>

      <motion.div
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
        {/* </div> */}
      </motion.div>
    </section>
  );
}

export default BannerSection;
