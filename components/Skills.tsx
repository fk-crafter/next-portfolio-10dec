"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Backend_skill, Frontend_skill } from "@/constants";
import { useLanguage } from "@/context/LanguageContext";
import { SkillDataProps } from "@/types";
import { iconAnimation, textAnimation } from "@/utils/motion";

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
  const { isFrench } = useLanguage();

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textAnimation}
        className="text-[30px] text-white font-semibold text-center mb-[15px]"
      >
        {isFrench
          ? "Compétences avancées en développement web"
          : "Mastering Modern Frontend & Backend Technologies"}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textAnimation}
        className="text-[20px] text-gray-300 mb-10 text-center"
      >
        {isFrench
          ? "Créateur de sites web performants, évolutifs et au design soigné."
          : "Builder of scalable, efficient, and visually stunning websites."}
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
