// "use client";
// import { motion, useScroll, useSpring } from "framer-motion";
// import Image from "next/image";

// const ImageSection = () => {
//   const { scrollYProgress } = useScroll();
//   const scaleImage = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   return (
//     <div className="image-section-wrapper relative">
//       <motion.div
//         className="home-image-wrapper w-full h-[40vh] md:h-screen"
//         style={{ scale: scaleImage }}
//       >
//         <Image
//           className="home-image "
//           src="/home/homeImage.png"
//           alt="karan"
//           fill
//           loading="lazy"
//         />
//       </motion.div>
//     </div>
//   );
// };

// export default ImageSection;

"use client"
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';

import './ImageSection.css'; // Import your CSS file

const ImageSection = () => {
  useEffect(() => {

    gsap.config({
      autoSleep: 60,
      force3D: true,
      nullTargetWarn: false,
      // trialWarn: false,
      units: { left: '%', top: '%', rotation: 'rad' },
    });

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true,
    });

    ScrollTrigger.refresh();

    const animationTl1 = gsap.timeline({
      paused: false,
    });

    const animationItems1 = document.querySelectorAll('[data-animated-item]');

    animationTl1.from(animationItems1, {
      opacity: 0,
      translateY: 100,
      stagger: 0.1,
    });

    ScrollTrigger.create({
      animation: animationTl1,
      trigger: '[data-second-section]',
      start: 'top 10%',
      end: 'top 10%',
      scrub: 4,
    });
  }, []);

  return (
    <div className="fullscreen border" id="second" data-second-section>
      <div className="container">
        <h1 data-animated-item>Second section</h1>
        <div className="wrapp">
          <div className="btn" data-animated-item>
            Button
          </div>
          <div className="btn" data-animated-item>
            Button
          </div>
          <div className="btn" data-animated-item>
            Button
          </div>
          <div className="btn" data-animated-item>
            Button
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;

