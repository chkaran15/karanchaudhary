"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

import { wrap } from "@motionone/utils";
import { BannerTextSection } from "../Home/homeWrapper/BannerTextSection";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 700);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax overflow-hidden w-full tracking-[-2px] leading-[0.8] flex flex-nowrap whitespace-nowrap">
      <motion.div
        className="scroller w-full text-[120px] font-medium  uppercase flex gap-20 flex-nowrap whitespace-nowrap"
        style={{ x }}
      >
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export const VelocityAnimation = () => {
  return (
    <>
      <div className=" py-[6%] ">
        <BannerTextSection />
      </div>
      <section className="velocity-wrapper w-full py-[5%] ">
        <motion.div
          transition={{ duration: 3.5, delay: 0.5 }}
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
        >
          <ParallaxText baseVelocity={-5}>Karan</ParallaxText>
        </motion.div>
        <motion.div
          transition={{ duration: 3.5, delay: 0.5 }}
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
        >
          <ParallaxText baseVelocity={5}>Chaudhary</ParallaxText>
        </motion.div>
      </section>
    </>
  );
};
