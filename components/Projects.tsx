"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projectData } from "@/constants";
import { useLanguage } from "@/context/LanguageContext";
import GitHubCalendar from "react-github-calendar";

const cardAnimation = {
  hidden: { opacity: 0 },
  visible: (index: number) => ({
    opacity: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const titleAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const Projects = () => {
  const { isFrench } = useLanguage();

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center  overflow-hidden z-20"
    >
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleAnimation}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#7b92b4] to-[#6f87ae] mb-10"
      >
        {isFrench ? "Mes Projets" : "My Projects"}
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-10">
        {projectData.map((project, index) => (
          <div key={index}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={cardAnimation}
                className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transition-transform duration-300"
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  width={1000}
                  height={1000}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4 bg-[#1a1c2b]">
                  <h2 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-gray-300">{project.description}</p>
                </div>
              </motion.div>
            </a>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-white text-lg mb-2">
          {isFrench ? "Mes Contributions" : "My Contributions"}
        </h3>
        <GitHubCalendar
          username="fk-crafter"
          blockSize={10}
          blockMargin={5}
          fontSize={14}
        />
      </div>
    </section>
  );
};

export default Projects;
