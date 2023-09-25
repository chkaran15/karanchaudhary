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

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  });

  return (
    <div className="w-full fixed">
      <div
        ref={navRef}
        className={`absolute z-10 w-full origin-top mb-10 transform ${
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
