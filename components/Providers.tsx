"use client";
import React, { useEffect, useState } from "react";
import OpeningAnimation from "./OpeningAnimation";
import NavbarComponent from "./NavbarComponent";
import { RecoilRoot } from "recoil";
import ParticlesComponent from "./Particles/Particles";

function Provider({ children }: { children: React.ReactNode }) {
  const [isSection1Loaded, setIsSection1Loaded] = useState(true);

  useEffect(() => {
    // Simulate loading of section1
    setTimeout(() => {
      setIsSection1Loaded(true);
    }, 3500); // Adjust the time to match your actual loading time

    // You can replace the setTimeout above with your actual loading logic.
  }, []);

  return (
    <RecoilRoot>
      {isSection1Loaded ? (
        <>
          <ParticlesComponent id="tsparticles" />
          <NavbarComponent />
          {children}
          <h1>footer</h1>
        </>
      ) : (
        <OpeningAnimation />
      )}
    </RecoilRoot>
  );
}

export default Provider;
