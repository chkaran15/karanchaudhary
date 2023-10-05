"use client";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

export const ScrollSpin = () => {
  const spinText = "M * y * P * o * r * t * f * o * l * i * o *";
  const [deg, setDeg] = useState(0);
  const [num, setNum] = useState(0);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("page scroll", latest);
    setNum(latest);
    if (latest > num) {
      setDeg(num + 30);
    } else {
      setDeg(num - 30);
    }
  });
  return (
<<<<<<< HEAD
    <div className="fixed top-[85%] left-[2%]">
      <motion.div
        className="sticky  w-[100px] h-[100px] rounded-full"
=======
    <div className="fixed z-[99] top-[85%] left-[2%]">
      <motion.div
        className="sticky w-[100px] h-[100px] rounded-full"
>>>>>>> code
        animate={{ rotate: deg }}
      >
        {/* <Link href="/" className="w-full h-full"></Link> */}
        <div className="relative w-full h-full  rounded-full">
          {spinText.split("").map((item, i) => (
            <span
              key={i}
              className="absolute w-full h-full shadow-md capitalize text-center text-sm"
              style={{
                transform: `rotate(${i * 8}deg)`,
                color: item === "*" ? "white" : "purple",
              }}
            >
              {item}
            </span>
          ))}
        </div>
<<<<<<< HEAD
        <div className="z-10 w-4 h-4 bg-slate-200 absolute top-[50%] transform -translate-y-[50%] left-[50%] -translate-x-[50%]"></div>
=======
        <div className=" w-4 h-4 bg-slate-200 absolute top-[50%] transform -translate-y-[50%] left-[50%] -translate-x-[50%]"></div>
>>>>>>> code
      </motion.div>
    </div>
  );
};
