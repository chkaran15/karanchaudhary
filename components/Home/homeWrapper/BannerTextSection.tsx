"use client";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export const VideoSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  return (
    <section className="absolute top-0 left-0 w-full h-screen  flex justify-center  items-center">
      <div ref={ref} className="w-full h-full  border-red border-dotted">
        <h1 className="progress sticky top-10 p-16 md:w-[650px]  text-4xl md:text-6xl font-extrabold">
          <span className="text-gray-500">Creative</span> Design Implementation
          & <span className="text-gray-500">Web</span> Development{" "}
          <span className="text-gray-500">Experiences</span>.
        </h1>
      </div>
    </section>
  );
};
