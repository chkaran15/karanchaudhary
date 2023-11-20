"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ProjectCard } from "@/components/common/ProjectCard";

const ProjectSection = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const animationItemRefs = Array.from({ length: 3 }, () => useRef<any>(null));
  const animationItemRef = useRef(null);
  const titleRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animationItemRef.current,
        start: "top 65%",
        end: `top 15%`,
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
          duration: 1.5 * (index + 1),
          delay: 0.3 * (index + 1), // Adjust delay dynamically based on index
        }
      );
    });

    const texttl = gsap.timeline({
      scrollTrigger: {
        trigger: animationItemRef.current,
        start: "top 75%",
        end: `top 25%`,
        scrub: 1,
        // markers: true,
      },
    });

    texttl.to(titleRef.current, {
      duration: 0.3,
      opacity: 1,
      y: 0,
    });
  }, []);

  return (
    <div
      className="fullscreen  flex flex-col gap-20 w-full h-[auto] py-10 px-4 lg:px-10 overflow-hidden "
      id="second"
      ref={animationItemRef}
    >
      <div
        ref={titleRef}
        className=" text-[40px] md:text-[80px] opacity-0 translate-y-10"
      >
        Projects
      </div>

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
