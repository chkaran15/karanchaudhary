"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ProjectCard } from "@/components/common/ProjectCard";

const ProjectSection = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const animationItemRefs = Array.from({ length: 3 }, () => useRef<any>(null));
  const animationItemRef = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animationItemRef.current,
        start: "top 75%",
        end: `top 25%`,
        scrub: 1,
        markers: true,
      },
    });

    animationItemRefs.forEach((ref, index) => {
      tl.fromTo(
        ref.current,
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2 * (index + 1), // Adjust delay dynamically based on index
        }
      );
    });
  }, []);

  return (
    <div
      className="fullscreen border  flex flex-col gap-20 w-full h-[auto] py-10 px-4 lg:px-10 overflow-hidden "
      id="second"
      ref={animationItemRef}
    >
      <div className="project-wrapper-container w-full justify-center flex gap-10 flex-wrap">
        {Array(3)
          .fill("_")
          .map((_, i) => (
            <div
              key={i}
              className="w-full lg:w-[30%] "
              ref={animationItemRefs[i]}
            >
              <ProjectCard />
            </div>
          ))}
      </div>
      <div className="flex justify-center">
        <button>More Works</button>
      </div>
    </div>
  );
};

export default ProjectSection;

