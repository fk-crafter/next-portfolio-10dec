"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

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

const shimmerAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: [0, 1, 0],
    x: ["-100%", "100%"],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 8,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  const { isFrench } = useLanguage();

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
          <motion.div className="Welcome-box py-[8px] px-[10px] border border-[#3b82f6] opacity-[0.95] mt-10 lg:mt-0 relative overflow-hidden">
            <SparklesIcon className="text-[#93c5fd] mr-[10px] h-5 w-5 z-10 relative" />
            <h1 className="Welcome-text text-[13px] text-white z-10 relative">
              {isFrench ? "Créer des" : "Crafting Exceptional"}{" "}
              <span className="text-[#3b82f6]">
                {isFrench ? "parcours numériques" : "Digital Journeys"}
              </span>
            </h1>

            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
              variants={shimmerAnimation}
              initial="initial"
              animate="animate"
            />
          </motion.div>

          <div className="flex flex-col gap-6 mt-6 text-4xl font-extrabold text-white leading-tight lg:text-6xl max-w-[600px] w-auto h-auto">
            <span>
              {isFrench ? (
                <>
                  <span className="block lg:inline">Transformez vos</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b92b4] to-[#6f87ae] block lg:inline">
                    {" idées audacieuses "}
                  </span>
                  <span className="block lg:inline">
                    en expériences digitales uniques.
                  </span>
                </>
              ) : (
                <>
                  Bringing
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b92b4] to-[#6f87ae]">
                    {" bold ideas "}
                  </span>
                  to life, one pixel at a time.
                </>
              )}
            </span>
          </div>

          <p className="text-lg text-gray-300 my-5 max-w-[600px] leading-relaxed">
            {isFrench ? (
              <>
                Je suis{" "}
                <span className="text-[#60a5fa] font-semibold">FK-Crafter</span>
                , un{" "}
                <span className="text-[#a78bfa] font-semibold">
                  Développeur Fullstack
                </span>{" "}
                spécialisé dans le{" "}
                <span className="text-[#60a5fa] font-semibold">
                  développement Front-end
                </span>
                . Je suis dédié à la création de sites web interactifs et de
                solutions logicielles de haute qualité.
              </>
            ) : (
              <>
                Hello, I&apos;m{" "}
                <span className="text-[#60a5fa] font-semibold">FK-Crafter</span>
                , a{" "}
                <span className="text-[#a78bfa] font-semibold">
                  Fullstack Developer
                </span>{" "}
                specializing in{" "}
                <span className="text-[#60a5fa] font-semibold">
                  Front-end Development
                </span>
                . I am dedicated to building high-quality, interactive websites
                and software solutions that stand out.
              </>
            )}
          </p>
        </motion.div>

        {/*  Icone */}

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
            className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2"
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

          <motion.div
            animate={generateFloatingAnimation(2.2)}
            className="absolute bottom-[55%] left-[30%] transform -translate-y-1/2"
          >
            <Image
              src="/postgre.png"
              alt="PostgreSQL"
              width={50}
              height={50}
              style={glowStyle}
            />
          </motion.div>

          <motion.div
            animate={generateFloatingAnimation(2.2)}
            className="absolute bottom-[10%] left-[15%] transform -translate-y-1/2"
          >
            <Image
              src="/framer.png"
              alt="Framer Motion"
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
