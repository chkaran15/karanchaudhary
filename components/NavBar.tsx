"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { navMenuState } from "@/atoms/navAtoms";
import { useRecoilState } from "recoil";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./Home/Navbar/MenuToggle";
import { useDimensions } from "./Home/Navbar/use-dimensions";
import Navigation from "./Home/Navbar/Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function NavBar() {
  const [dateTime, setDateTime] = useState<string>(new Date().toLocaleString());
  const [meridiem, setMeridiem] = useState<string>("");
  const [isOpen, setOpen] = useRecoilState<boolean>(navMenuState);

  useEffect(() => {
    // Update the date and time every second
    const intervalID = setInterval(() => {
      4;
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const amOrPm = hours >= 12 ? "PM" : "AM";

      const formattedHours = hours % 12 || 12; // convert to 12 hour format

      const time = `${formattedHours}:${minutes}:${seconds}`;
      setMeridiem(amOrPm);
      setDateTime(time);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalID);
  }, []); // Empty dependency array means this effect runs only once on component mount


  // const [isOpen, toggleOpen] = useCycle(false, true);

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef) || { height: 600 };

  return (
    <nav
      className={`navbar-wrapper flex items-center justify-between  px-10 bg-white text-black bg-opacity-70 py-2`}
    >
      <Logo />
      <div className=" w-[30%] flex justify-between items-center">
        <h1 className="text-lightgray font-semibold">
          Nepal, Kathmandu <span className="text-black">{dateTime}</span>{" "}
          {meridiem}
        </h1>

        {/* <div className="menu-wrapper flex items-center gap-2">
          <h1 className="menu-text  text-normal ">Menu</h1>
          <div onClick={handleShowMenu} className="menu-icon w-[30px] h-[30px] rounded-full flex justify-center items-center border border-black cursor-pointer hover:bg-lightblue">
            <LuLayoutDashboard  />
          </div>
        </div> */}

        <div className="menu-wrapper flex items-center gap-2">
          <h1 className="menu-text  text-normal ">Menu</h1>
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
          >
            <div className="menu-icon w-[30px] h-[30px] rounded-full flex justify-center items-center border border-black cursor-pointer hover:bg-lightblue">
              <MenuToggle toggle={() => setOpen(true)} />
            </div>
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } absolute w-[480px] h-[600px] bg-white right-4 top-4 rounded-xl `}
            >
              <Navigation dateTime={dateTime} meridiem={meridiem} />
            </div>
          </motion.nav>
        </div>

        {/* <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          // custom={height}
          ref={containerRef}
        >
          <h1 className="menu-text  text-normal ">Menu</h1>
          <motion.div className="background" variants={sidebar} />
          <Navigation />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav> */}
      </div>
    </nav>
  );
}

export default NavBar;
