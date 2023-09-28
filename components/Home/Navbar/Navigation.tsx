import * as React from "react";
import { motion, usePresence } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { MenuToggle } from "./MenuToggle";
import { navMenuState } from "@/atoms/navAtoms";
import { useRecoilState } from "recoil";
import { navlinks } from "@/data/navlinks";
import { sociallinks } from "@/data/sociallinks";
import { SocialItems } from "./SocialItems";
import { BsArrowUpRight } from "react-icons/bs";
import gsap from "gsap";

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

export default function Navigation({ dateTime, meridiem }: NavDropDownProps) {
  const [isOpen, setOpen] = useRecoilState<boolean>(navMenuState);
  const menuRef = React.useRef(null);
  const [isPresent, safeToRemove] = usePresence();

  React.useEffect(() => {
    if (!isPresent) {
      gsap.to(menuRef.current, {
        opacity: 0,
        onComplete: () => safeToRemove?.(),
      });
    }
  }, [isPresent, safeToRemove]);

  return (
    <div
      ref={menuRef}
      className={`absolute w-full  origin-top h-screen md:w-[480px]  md:h-[600px] bg-white right-0 top-0 md:right-4 md:top-1 md:rounded-xl `}
    >
      <div className="flex flex-col h-full py-3 px-4 gap-4 ">
        <div className="flex justify-between items-center">
          <h1 className="text-xs md:text-base text-lightgray font-semibold">
            Nepal, Kathmandu <span className="text-black">{dateTime}</span>{" "}
            {meridiem}
          </h1>

          <div className="menu-wrapper flex items-center gap-2">
            <h1 className="menu-text  text-normal ">Close</h1>
            <div className="menu-icon w-[30px] h-[30px] rounded-full flex justify-center items-center border border-black cursor-pointer hover:bg-lightblue">
              <MenuToggle toggle={() => setOpen(false)} />
            </div>
          </div>
        </div>

        <div className="relative h-full  flex gap-4 justify-between">
          <motion.ul variants={variants} className="flex flex-col gap-4">
            {navlinks?.map((data, index) => (
              <MenuItem data={data} key={data?.id} index={index} />
            ))}
          </motion.ul>
          <div className="absolute left-2 bottom-2 flex gap-2 md:gap-4 items-center cursor-pointer hover:text-lightblue">
            <h1 className="text-xs md:text-base">tharukaran930@gmail.com</h1>
            <div className="arrow-icon hidden md:block">
              <BsArrowUpRight size={15} />
            </div>
          </div>

          <div className=" absolute right-2 bottom-1 flex flex-col gap-4">
            <motion.ul variants={variants} className="flex flex-col gap-3 md:gap-6">
              {sociallinks?.map((data, index) => (
                <SocialItems data={data} key={index} />
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const itemIds = ["Home", "Projects", "Expertise", "About", "Feed", "Contact"];
