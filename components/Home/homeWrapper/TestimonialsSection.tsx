"use client";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { RiStarSFill } from "react-icons/ri";
import gsap from "gsap";

export const TestimonialsSections = () => {
  const testimonialRef = useRef(null);
  const titleRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const texttl = gsap.timeline({
      scrollTrigger: {
        trigger: testimonialRef.current,
        start: "top 75%",
        end: `top 25%`,
        scrub: 1,
        // markers: true,
      },
    });

    texttl.to(titleRef.current, {
      duration: 0.4,
      opacity: 1,
      y: 0,
      delay: 0.3,
    });

    texttl.to(cardRef.current, {
      duration: 0.5,
      opacity: 1,
      y: 0,
      delay: 0.5,
    });
  }, []);

  return (
    <section
      ref={testimonialRef}
      className=" flex flex-col justify-center gap-20 w-full h-[auto] py-10 px-4 lg:px-10 overflow-hidden "
    >
      <div
        ref={titleRef}
        className=" text-[40px] md:text-[80px] opacity-0 translate-y-20"
      >
        Testimonials Sections
      </div>
      <div className="flex w-full justify-center">
        <div
          ref={cardRef}
          className="testominals-wrapper opacity-0 translate-y-20  w-full md:w-[70%] flex flex-col gap-10 md:gap-4 md:flex-row p-12 justify-between  border-2 border-black rounded-3xl"
        >
          <div className="testominals-image-wrapper relative w-full md:w-[35%]  flex justify-center items-center">
            <div className="relative  w-[250px] h-[250px] bg-blue-500 rounded-full ">
              <Image
                src={"/images.jpg"}
                width={180}
                height={500}
                alt="testominals"
                className="absolute h-[280px] z-10 rounded-full bottom-0 left-[50%] translate-x-[-50%]"
              />
            </div>
            <div className="w-[40px] h-[300px] absolute top-0 left-[28%] bg-orange-500 rounded-full"></div>{" "}
            <div className="w-[40px] h-[70px] absolute top-0 left-[18%] bg-orange-500 rounded-full"></div>
          </div>

          <div className="testominals-content-wrapper flex flex-col justify-center w-full  md:w-[60%]">
            <h1 className="testominals-content-quote text-[100px] leading-3">
              {'"'}
            </h1>
            <div className="testominals-content flex flex-col gap-2">
              <div className="testominals-content-title flex justify-between  items-center ">
                <h1>
                  Kate Rogers - <span>Graphics designers</span>
                </h1>
                <div className="stars-wapper flex gap-1">
                  {Array(5)
                    .fill("_")
                    .map((_, index) => (
                      <RiStarSFill key={index} style={{ color: "orange" }} />
                    ))}
                </div>
              </div>
              <h1 className="testominals-content-title text-[42px] uppercase">
                Amazing Customer Service
              </h1>
              <p className="testominals-content-text text-[20px] ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium omnis, error aliquid alias eius ab facilis deserunt
                aliquam quis quos exercitationem, fugit facere incidunt
                voluptate et officia mollitia veritatis autem.
              </p>
            </div>
            <h1 className="testominals-content-quote text-[100px] ">{'"'}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
