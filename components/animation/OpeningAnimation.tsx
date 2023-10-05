"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export const OpeningAnimation = () => {
  const data = [
    "Hello",
    "Namasta",
    "Welcome",
    "नमस्ते",
    "مرحبًا",
    "こんにちは",
  ];
  const [title, setTitle] = useState("hello");
  const settingNewTitle = () => {
    setInterval(() => {
      setTitle(data[Math.floor(Math.random() * data.length)]);
    }, 200);
  };
  useEffect(() => {
    settingNewTitle();
  }, []);

  return (
    <motion.div
      className="w-full h-screen bg-black flex justify-center items-center text-white overflow-hidden"
      transition={{ duration: 1.2, delay: 1.8 }}
      animate={{
        y: "-100%",
        borderBottomLeftRadius: "50%",
        borderBottomRightRadius: "50%",
      }}
    >
      {/* <video className="absolute -z-[1] top-0 object-cover lef-0 w-full h-full" autoPlay loop muted>
        <source src="https://res.cloudinary.com/dftgrb9fb/video/upload/v1696534648/pexels-byron-bhxr-11063871_1080p_fzepiq.mp4" />
      </video> */}
      <h1 className="capitalize">{title}</h1>
    </motion.div>
  );
};
