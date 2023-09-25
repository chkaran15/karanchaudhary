import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { MenuToggle } from "./MenuToggle";
import { navMenuState } from "@/atoms/navAtoms";
import { useRecoilState } from "recoil";


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

interface NavDropDownProps {
  dateTime: string;
  meridiem: string;

}

export default function Navigation({dateTime,meridiem}:NavDropDownProps) {
      const [isOpen, setOpen] = useRecoilState<boolean>(navMenuState);

    return (
<div className="flex flex-col py-4 px-4 gap-4">
    <div className="flex justify-between items-center">
      <h1 className="text-lightgray font-semibold">
        Nepal, Kathmandu <span className="text-black">{dateTime}</span>{" "}
        {meridiem}
      </h1>

      <div className="menu-wrapper flex items-center gap-2">
        <h1 className="menu-text  text-normal ">Menu</h1>
        <div className="menu-icon w-[30px] h-[30px] rounded-full flex justify-center items-center border border-black cursor-pointer hover:bg-lightblue">
          <MenuToggle toggle={() => setOpen(false)} />
        </div>
      </div>
    </div>

    <motion.ul variants={variants} className="flex flex-col gap-6">
      {itemIds.map((i) => (
        <MenuItem i={i} key={i} />
      ))}
    </motion.ul>
  </div>
    )
}

const itemIds = [0, 1, 2, 3, 4];
