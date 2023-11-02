"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ProjectCard } from "@/components/common/ProjectCard";

const CardScrollProject = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const animationItemRefs = Array.from({ length: 3 }, () => useRef<any>(null));
  const animationItemRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animationItemRef.current,
        start: "top center",
        end: "+=600px",
        scrub: 2,
        // markers: true,
      },
    });

    animationItemRefs.forEach((ref, index) => {
      tl.fromTo(
        ref.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          position: "absolute",
          borderRadius: "20px",
          boxShadow: "rgba(255, 255, 255, 0.35) 5px 5px 5px 10px",
          top: `${100 * (index + 1)}px `,
          delay: 0.5 * (index + 1), // Adjust delay dynamically based on index
        }
      );
    });
  }, []);

  return (
    <div
      className="fullscreen bg-green-300  flex w-full h-[150vh] py-10 px-4 lg:px-10 overflow-hidden "
      id="second"
      ref={animationItemRef}
    >
      <div className="wrapp relative w-full h-full ">
        {Array(3)
          .fill("_")
          .map((_, i) => (
            <div
              key={i}
              className="w-full lg:w-[30%] h-[600px] absolute bottom-0 hover:z-[1] hover:shadow-2xl hover:shadow-white"
              ref={animationItemRefs[i]}
            >
              <ProjectCard />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardScrollProject;
