// "use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import React from "react";

function Logo() {
  const router = useRouter();
  return (
    <div
      className="logo-wrapper flex gap-2 items-center cursor-pointer"
      onClick={() => router.push("/")}
    >
      <Image
        src={"/logo.png"}
        alt="logo"
        width={60}
        height={60}
        // className="bg-gray-300 rounded-full"
      />
      <div className="logo-text hidden lg:block font-bold text-xl leading-5">
        <h1 className="text-black">Karan</h1>
        <h1 className="text-blue-700">Chaudhary</h1>
      </div>
    </div>
  );
}

export default Logo;
