"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { navMenuState } from "@/atoms/navAtoms";
import { useRecoilState } from "recoil";
import { useRef } from "react";
import { AnimatePresence, motion, useCycle, usePresence } from "framer-motion";
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
      className={`navbar-wrapper flex items-center justify-between px-3 lg:px-8 shadow-lg bg-opacity-90 py-2 text-white`}
    >
      <Logo />
      <div
        className={` flex lg:w-[35%] xl:w-[28%] justify-between items-center`}
      >
        <h1 className={`hidden lg:block  font-semibold`}>
          Nepal, Kathmandu <span className="text-gray-400">{dateTime}</span>{" "}
          {meridiem}
        </h1>

        <div className="menu-wrapper flex items-center gap-2">
          <h1 className="menu-text  text-normal ">Menu</h1>
          {/* <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
          > */}
          <MenuToggle toggle={() => setOpen(true)} />
          {/* </motion.nav> */}
          <AnimatePresence>
            {isOpen ? (
              // <div
              //   ref={menuRef}
              //   className={`absolute w-full h-screen md:w-[480px]  md:h-[600px] bg-white right-0 top-0 md:right-4 md:top-1 md:rounded-xl `}
              // >
              <Navigation dateTime={dateTime} meridiem={meridiem} />
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
