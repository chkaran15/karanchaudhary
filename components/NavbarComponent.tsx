import React, { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";

function NavbarComponent() {
  const navRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);

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
  },[]);

  return (
    <div className="w-full fixed">
      <div
        ref={navRef}
        className={`absolute z-10 w-full origin-top  transform ${
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
