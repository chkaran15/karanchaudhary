"use client";
import React, { useEffect, useState } from "react";
import NavbarComponent from "./NavbarComponent";
import { RecoilRoot } from "recoil";
// import ParticlesComponent from "./Particles/Particles";
import Footer from "./Footer/footer";
import { OpeningAnimation } from "./animation/OpeningAnimation";
import { ScrollSpin } from "./animation/ScrollSpin";

function Provider({ children }: { children: React.ReactNode }) {
  const [isloadingAnimation, setIsLoadingAnimation] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading of section1
    setTimeout(() => {
      setIsLoadingAnimation(true);
    }, 1000); // Adjust the time to match your actual loading time
    // You can replace the setTimeout above with your actual loading logic.
  }, []);

  return (
    <RecoilRoot>
      {isloadingAnimation ? (
        <>
          <ScrollSpin />
          {/* <ParticlesComponent id="tsparticles" /> */}
          <NavbarComponent />
          {children}
          <Footer />
        </>
      ) : (
        <OpeningAnimation />
      )}
    </RecoilRoot>
  );
}

export default Provider;
