"use client";
import { Variants, motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";

const cardVariants: Variants = {
  offscreen: {
    y: 50,
  },
  onscreen: {
    y:10,
    rotate: 20,
    transition: {
      type:"spring",
      bounce: 0.6,
      duration: 0.7,
    },
  },
};

const ImageSection = () => {
  //   const { scrollYProgress } = useScroll();
  //   const scaleImage = useSpring(scrollYProgress, {
  //     stiffness: 100,
  //     damping: 30,
  //     restDelta: 0.001,
  //   });

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="image-section-wrapper relative">
        <motion.div
          className="home-image-wrapper w-full h-[40vh] md:h-screen"
          variants={cardVariants}
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
    </motion.div>
  );
};

export default ImageSection;
