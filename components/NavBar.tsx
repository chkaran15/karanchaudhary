"use client";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
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
  const [isActive, setIsActive] = useRecoilState<boolean>(navMenuState);

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
    <nav className="navbar-wrapper px-4 md:px-10  shadow-2xl  py-[19px] flex justify-between items-center">
      <Logo />
      <motion.div
        onClick={() => setIsActive(!isActive)}
        className="w-10 h-10 relative z-10 rounded-full bg-green-400 text-white flex justify-center items-center   text-xs cursor-pointer overflow-hidden"
      >
        <motion.div
          transition={{ duration: 0.5 }}
          className="bg-green-400 -z-10"
          animate={{
            position: "absolute",
            width: isActive ? "100%" : "0%",
            height: isActive ? "100%" : "0%",
            borderRadius: "50%",
            backgroundColor: isActive ? "red" : "green",
          }}
        ></motion.div>

        {isActive ? (
          <AiOutlineClose size={25} color={"white"} fontWeight={"bold"} />
        ) : (
          <HiOutlineMenuAlt4 size={25} />
        )}
      </motion.div>
      <motion.div
        transition={{ duration: isActive ? 0.5 : 0.5 }}
        animate={{
          width: isActive ? "430px" : "0px",
          height: isActive ? "50vh" : "0px",
          borderRadius: "20px",
          display: "flex",
          // backgroundColor: isActive ? "red" : "green",
        }}
        className={`nav-components ${
          isActive ? "block  " : "hidden "
        }  shadow-lg bg-white absolute top-0 right-0 md:top-6 md:right-10`}
      >
        {isActive ? (
          <Navigation dateTime={dateTime} meridiem={meridiem} />
        ) : null}
      </motion.div>
      \{" "}
    </nav>
  );
}

export default NavBar;
