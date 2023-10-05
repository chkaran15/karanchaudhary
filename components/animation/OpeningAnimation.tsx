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
      className="bg-black w-full h-screen flex justify-center items-center text-white"
      transition={{ duration: 1.2, delay: 1.8 }}
      animate={{
        y: "-100%",
        borderBottomLeftRadius: "50%",
        borderBottomRightRadius: "50%",
      }}
    >
      <h1 className="capitalize">{title}</h1>
    </motion.div>
  );
};
