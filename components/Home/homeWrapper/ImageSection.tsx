"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";

const ImageSection = () => {
  const { scrollYProgress } = useScroll();
  const scaleImage = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="image-section-wrapper relative">
      <motion.div className="home-image-wrapper w-full h-[40vh] md:h-screen"
      style={{scale:scaleImage}}
      >
        <Image
          className="home-image "
          src="/home/homeImage.png"
          alt="karan"
          fill
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

export default ImageSection;
