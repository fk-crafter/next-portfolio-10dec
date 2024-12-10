"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const generateFloatingAnimation = (delay: number) => ({
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
    delay,
  },
});

const glowStyle = {
  filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.8))",
  transition: "filter 0.3s ease-in-out",
};

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-8 md:px-20 mt-20 md:mt-40 w-full z-[20]"
      >
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start"
        >
          <motion.div className="Welcome-box py-[8px] px-[10px] border border-[#3b82f6] opacity-[0.95]">
            <SparklesIcon className="text-[#93c5fd] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px] text-white">
              Crafting Exceptional{" "}
              <span className="text-[#3b82f6]">Digital Journeys</span>
            </h1>
          </motion.div>

          <div className="flex flex-col gap-6 mt-6 text-5xl md:text-6xl font-extrabold text-white max-w-[600px] w-auto h-auto leading-tight">
            <span>
              Bringing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b92b4] to-[#6f87ae]">
                {" "}
                bold ideas{" "}
              </span>
              to life, one pixel at a time.
            </span>
          </div>

          <p className="text-lg text-gray-300 my-5 max-w-[600px] leading-relaxed">
            Hello, I&apos;m{" "}
            <span className="text-[#60a5fa] font-semibold">FK-Crafter</span>, a
            passionate{" "}
            <span className="text-[#a78bfa] font-semibold pr-1">
              Front-end Developer
            </span>
            dedicated to building high-quality, interactive websites and
            software solutions that stand out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden md:block w-[550px] h-[550px]"
        >
          <motion.div
            animate={generateFloatingAnimation(0)}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <Image
              src="/react.png"
              alt="React"
              width={80}
              height={80}
              style={glowStyle}
            />
          </motion.div>

          <motion.div
            animate={generateFloatingAnimation(0.2)}
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
          >
            <Image
              src="/html.png"
              alt="HTML"
              width={50}
              height={50}
              style={glowStyle}
            />
          </motion.div>

          <motion.div
            animate={generateFloatingAnimation(0.4)}
            className="absolute top-[20%] right-0 transform -translate-y-1/2"
          >
            <Image
              src="/css.png"
              alt="CSS"
              width={50}
              height={50}
              style={glowStyle}
            />
          </motion.div>

          <motion.div
            animate={generateFloatingAnimation(0.6)}
            className="absolute bottom-[20%] right-0 transform -translate-y-1/2"
          >
            <Image
              src="/js.png"
              alt="JavaScript"
              width={50}
              height={50}
              style={glowStyle}
            />
          </motion.div>

          <motion.div
            animate={generateFloatingAnimation(0.8)}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          >
            <Image
              src="/ts.png"
              alt="TypeScript"
              width={50}
              height={50}
              style={glowStyle}
            />
          </motion.div>

          <motion.div
            animate={generateFloatingAnimation(1)}
            className="absolute bottom-[20%] left-0 transform -translate-y-1/2"
          >
            <Image
              src="/node-js.png"
              alt="Node.js"
              width={50}
              height={50}
              style={glowStyle}
            />
          </motion.div>

          <motion.div
            animate={generateFloatingAnimation(1.2)}
            className="absolute top-[20%] left-0 transform -translate-y-1/2"
          >
            <Image
              src="/next.png"
              alt="Next.js"
              width={50}
              height={50}
              style={glowStyle}
            />
          </motion.div>

          <motion.div
            animate={generateFloatingAnimation(1.4)}
            className="absolute top-[50%] left-[10%] transform -translate-y-1/2"
          >
            <Image
              src="/tailwind.png"
              alt="Tailwind"
              width={50}
              height={50}
              style={glowStyle}
            />
          </motion.div>

          <motion.div
            animate={generateFloatingAnimation(1.6)}
            className="absolute bottom-[50%] right-[10%] transform -translate-y-1/2"
          >
            <Image
              src="/prisma.webp"
              alt="Prisma"
              width={50}
              height={50}
              style={glowStyle}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
