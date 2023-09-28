import * as React from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const SocialItems = ({ data }: { data: any }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        className={`icon-placeholder w-[90px] md:w-[110px] h-[20px] flex justify-between items-center cursor-pointer `}
        style={{ color: data?.color }}
      >
        <h1 className={`text-sm md:text-lg cursor-pointer capitalize `}>{data?.name}</h1>

        <div className="arrow-icon">
          <BsArrowUpRight size={15} />
        </div>
      </div>
    </motion.li>
  );
};
