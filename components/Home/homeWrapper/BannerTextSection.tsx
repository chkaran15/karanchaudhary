"use client";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export const BannerTextSection = () => {
  const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["end end", "start start"],
  // });
  return (
      <div ref={ref} className="w-[60%] pt-[5%] pl-[2%] ">
        <h1 className="progress  text-4xl md:text-[60px] font-normal trackling-normal leading-[60px] uppercase">
          A Creative Design Implementation & web Development Experiences
        </h1>
      </div>
  );
};
