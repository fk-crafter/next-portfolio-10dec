"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";
import { Backend_skill, Frontend_skill } from "@/constants";

const iconAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

interface SkillDataProps {
  src: string;
  width: number;
  height: number;
  index: number;
  customClass?: string;
}

const SkillDataProvider = ({
  src,
  width,
  height,
  index,
  customClass,
}: SkillDataProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      variants={iconAnimation}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt="skill image"
        className={customClass || ""}
      />
    </motion.div>
  );
};

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center lg:-mt-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.2)}
        className="text-[30px] text-white font-semibold mt-[10px] text-center mb-[15px]"
      >
        Mastering Modern Frontend & Backend Technologies
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromRight(0.2)}
        className="text-[20px] text-gray-300 mb-10 mt-[10px] text-center"
      >
        Building scalable, efficient, and visually stunning applications.
      </motion.div>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-10 py-10"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            customClass={image.customClass}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
