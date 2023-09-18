"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import LinkComponent from "./LinkComponent";

// bg-[#9900ff]

const visible = { opacity: 1, x: 0, transition: { duration: 2 } };

const itemVariants = {
  hidden: { opacity: 0, x: 10 },
  visible,
};

function OpeningAnimation() {
  return (
    <main className="h-screen bg-black overflow-hidden">
      <div className="flex flex-col md:flex-row h-[90vh]  justify-center items-center ">
        <div>
          <motion.div
            className=" w-[200px] h-[200px] bg-[#fafafa] rounded-[50%] overflow-hidden z-10"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 360, 280, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
            }}
          >
            <Image
              width={200}
              height={200}
              alt="logo"
              src={"/favicon/karanpng.png"}
              className="rounded-[50%]"
            />
          </motion.div>
        </div>

        <div>
          <motion.article
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1 } }}
            variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, x: -300 },
                visible,
              }}
              style={
                {
                  paddingLeft: "20px",
                  fontWeight: "700",
                  fontSize: "50px",
                  color: "#9900ff",
                } as any
              }
            >
              Karan
            </motion.h1>

            <motion.h1
              variants={{
                hidden: { opacity: 0, x: -300 },
                visible,
              }}
              style={
                {
                  paddingLeft: "20px",
                  fontWeight: "700",
                  fontSize: "50px",
                  color: "#9900ff",
                } as any
              }
            >
              Chaudhary
            </motion.h1>
          </motion.article>
        </div>
      </div>
      <LinkComponent
        href="/home"
        linkname="Click here to go"
        className="text-[#9900ff] underline text-xl font-semibold mb-3 flex justify-center"
      />
    </main>
  );
}

export default OpeningAnimation;
