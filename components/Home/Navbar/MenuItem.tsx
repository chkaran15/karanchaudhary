import * as React from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";

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

export const MenuItem = ({
  data,
  index,
  toggle,
}: {
  data: any;
  index: number;
  toggle: () => void;
}) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={data?.url}
        onClick={toggle}
        className={`icon-placeholder group w-[150px]  md:w-[200px] h-[30px] md:h-[50px] flex justify-between items-center cursor-pointer `}
        // style={{ color: data?.color }}
      >
        <h1 className={`text-lg md:text-[27px] lg:text-[37px] cursor-pointer `}>
          {data?.name}
        </h1>

        <div className="top-arrow hidden group-hover:block">
          <GoDotFill size={25} />
        </div>
        {/* <div className="down-arrow absolute  -left-7  ">
            <BsArrowUpRight size={30} />
          </div> */}
      </Link>
    </motion.li>
  );
};
