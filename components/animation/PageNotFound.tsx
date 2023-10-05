"use client";
import Lottie from "react-lottie-player";
import lottieJson from "@/data/animationPageNotFound.json";
import React from "react";
const PageNotFound = () => {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 300, height: 300 }}
    />
  );
};

export default PageNotFound;
