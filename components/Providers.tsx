"use client";
import React, { useEffect, useState } from "react";
import OpeningAnimation from "./OpeningAnimation";

function Provider({ children }: { children: React.ReactNode }) {
  const [isSection1Loaded, setIsSection1Loaded] = useState(false);

  useEffect(() => {
    // Simulate loading of section1
    setTimeout(() => {
      setIsSection1Loaded(true);
    }, 3500); // Adjust the time to match your actual loading time

    // You can replace the setTimeout above with your actual loading logic.
  }, []);
  return (
    <>
      {isSection1Loaded ? (
        <>
          <h1>navbar</h1>
          {children}
          <h1>footer</h1>
        </>
      ) : (
        <OpeningAnimation />
      )}
    </>
  );
}

export default Provider;
