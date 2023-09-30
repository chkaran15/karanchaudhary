import * as React from "react";
import { motion, Variants } from "framer-motion";
import { LuLayoutDashboard } from "react-icons/lu";
import { navMenuState } from "@/atoms/navAtoms";
import { useRecoilState } from "recoil";
import { GrClose } from "react-icons/gr";

// Define the type for the props
type PathProps = {
  variants: Variants;
  d: string;
  opacity?: number;
  transition?: { duration: number };
};

const Path: React.FC<PathProps> = ({
  variants,
  d,
  opacity = 1,
  transition,
}) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="black"
    strokeLinecap="round"
    d={d}
    variants={variants}
    initial="closed"
    animate="open"
    transition={transition}
  />
);

type MenuToggleProps = {
  toggle: () => void;
};

export const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => {
  const [isOpen, setOpen] = useRecoilState<boolean>(navMenuState);

  return (
    <div
      onClick={toggle}
      className="menu-icon w-[30px] h-[30px] rounded-full flex justify-center items-center border border-white cursor-pointer hover:bg-lightblue hover:border-0"
    >
      <button>
        {isOpen === false ? (
          <LuLayoutDashboard size="1.1rem" color="white" />
        ) : (
          <GrClose size="1.1rem" color="gray" />
        )}
      </button>
    </div>
  );
};
