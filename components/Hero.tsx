"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { generateFloatingAnimation } from "@/utils/motion";
import { IconCloud } from "@/components/magicui/icon-cloud";

const localImages = [
  "/react.png",
  "/next.png",
  "/js.png",
  "/ts.png",
  "/tailwind.png",
  "/nestjs.png",
  "/prisma.webp",
  "/postgre.png",
  "/motion.png",
];

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
          className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start"
        >
          <motion.div className="Welcome-box py-[8px] px-[10px] border border-[#3b82f6] opacity-[0.95] mt-20 lg:-mt-10 relative overflow-hidden ml-6 sm:ml-0">
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
                  Launch-ready websites that
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7b92b4] to-[#6f87ae]">
                    {" convert, impress, and scale "}
                  </span>
                </>
              )}
            </span>

            <motion.div variants={slideInFromLeft(0.6)}>
              <a
                href="#contact"
                className="inline-block px-6 py-3 text-white font-semibold text-lg rounded-full border border-blue-500 hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-300"
              >
                {isFrench ? "Contact" : "Let’s Work Together"}
              </a>
            </motion.div>
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
          className="relative hidden md:flex  items-center justify-center"
        >
          <div className="relative size-full">
            <IconCloud images={localImages} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
