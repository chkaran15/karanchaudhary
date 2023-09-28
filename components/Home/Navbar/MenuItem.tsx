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

export const MenuItem = ({ data, index }: { data: any; index: number }) => {
  
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        className={`icon-placeholder w-[150px]  md:w-[220px] h-[30px] md:h-[50px] flex justify-between items-center cursor-pointer `}
        style={{ color: data?.color }}
      >
        <h1 className={`text-lg md:text-[27px] lg:text-[37px] cursor-pointer `}>
          {data?.name}
        </h1>

        <div className="relative arrow-icon">
          <div className="top-arrow">
            <BsArrowUpRight size={25} />
          </div>
          {/* <div className="down-arrow absolute  -left-7  ">
            <BsArrowUpRight size={30} />
          </div> */}
        </div>
      </div>
    </motion.li>
  );
};
