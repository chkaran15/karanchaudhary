import React, { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import { useRecoilState } from "recoil";
import { navMenuState } from "@/atoms/navAtoms";

function NavbarComponent() {
  const navRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);
  const [isOpen, setOpen] = useRecoilState<boolean>(navMenuState);

  let lastScrollY = 0;

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY <= 100) {
      setShow(true);
    } else if (currentScrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    lastScrollY = currentScrollY;
  };

  // hide and show navbar when scroll
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  // close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  });

  return (
    <div className="w-full fixed z-[99]">
      <div
        ref={navRef}
        className={`absolute w-full origin-top mb-10 transform bg-white ${
          show
            ? "block animate-top-nav transition ease-in duration-700 delay-700"
            : "animate-down-nav hidden"
        }`}
      >
        <NavBar />
      </div>
    </div>
  );
}

export default NavbarComponent;
