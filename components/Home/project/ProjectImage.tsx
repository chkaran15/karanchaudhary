"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import React, { FC, useRef, useEffect, useState } from "react";

interface ImageProps {
  src: string;
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
export const ProjectImage: FC<ImageProps> = ({ src }) => {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imageRef });
  const y = useParallax(scrollYProgress, 450);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState<any>("default");

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants: any = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      display: "none",
      backgroundColor: "transparent",
      mixBlendMode: "difference",
    },

    image: {
      // height: 80,
      // width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      dispay: "block",
      backgroundColor: "white",
      // mixBlendMode: "difference",
    },
  };

  const imageEnter = () => setCursorVariant("image");
  const imageLeave = () => setCursorVariant("default");

  return (
    <section className="image-section-wrapper cursor-none scroll-smooth bg-red-300 flex relative w-full h-[90vh] justify-center items-center ">
      <div
        ref={imageRef}
        onMouseEnter={imageEnter}
        onMouseLeave={imageLeave}
        className="image-container-wrapper relative w-[90vw] h-full overflow-hidden "
      >
        <Image
          src={`${src}`}
          fill
          alt="banner"
          objectFit="cover"
          className="absolute top-0 left-0"
        />
      </div>
      <motion.div
        className="cursor fixed top-0 left-0 h-[100px] w-[100px]  rounded-full shadow-2xl  pointer-events-none"
        variants={variants}
        animate={cursorVariant}
      >
        <h1 className="w-full h-full p-4 text-xl text-center flex justify-center items-center flex-wrap ">
          See Project
        </h1>
      </motion.div>
    </section>
  );
};
