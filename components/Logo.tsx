import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div className="logo-wrapper flex gap-2 items-center">
      <Image src={"/logo.png"} alt="logo" width={50} height={50} />
      <div className="logo-text font-bold text-xl leading-5">
        <h1 className="text-black">Karan</h1>
        <h1 className="text-lightblue">Chaudhary</h1>
      </div>
    </div>
  );
}

export default Logo;
