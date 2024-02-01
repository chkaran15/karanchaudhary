"use client";
import { useEffect, useRef } from "react";
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
import gsap from "gsap";
import Lottie from "react-lottie-player";
import AnimationJson from "../Home/homeWrapper/services/animation.json";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 500,
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
  const x = useTransform(baseX, (v) => `${wrap(-50, -150, v)}%`);

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
        className="scroller w-full text-[120px] md:text-[250px] font-extrabold uppercase flex gap-20 flex-nowrap whitespace-nowrap"
        style={{ x }}
      >
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
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      {
        x: "100%",
      },
      { x: "0%", duration: 2, opacity: 1, delay: 0.5 }
    );

    gsap.fromTo(
      rightRef.current,
      {
        x: "-100%",
      },
      { x: "0%", duration: 2, opacity: 1, delay: 0.5 }
    );
  }, []);

  return (
    <div className="banner-wrapper w-full   flex flex-col justify-between px-4 lg:px-10">
      <div className="mt-[40%]  md:mt-[15%] lg:mt-[12%]  flex flex-col md:flex-row justify-between ">
        <BannerTextSection />
        <div className=" hidden  -mt-24 lg:flex justify-end">
          <Lottie
            loop
            animationData={AnimationJson}
            play
            style={{ width: 600, height: 600 }}
          />
        </div>
        <div className=" lg:hidden -mt-24 flex justify-center ">
          <Lottie
            loop
            animationData={AnimationJson}
            play
            style={{ width: 370, height: 550 }}
          />
        </div>
      </div>
      {/* <section className="velocity-wrapper w-full  ">
        <div ref={leftRef} className="opacity-0">
          <ParallaxText baseVelocity={-7}>Make Yourself Shine</ParallaxText>
        </div>
      </section> */}
    </div>
  );
};
