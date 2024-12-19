"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projectData } from "@/constants";
import { useLanguage } from "@/context/LanguageContext";
import GitHubCalendar from "react-github-calendar";
import { cardAnimation, titleAnimation } from "@/utils/motion";

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
                className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transition-transform duration-300 hover:shadow-2xl"
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  width={1000}
                  height={1000}
                  className="w-full h-[200px] object-cover transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                  <div className="flex gap-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Image
                        key={techIndex}
                        src={tech}
                        alt="Technology Logo"
                        width={40}
                        height={40}
                        className="w-10 h-10"
                      />
                    ))}
                  </div>
                </div>

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

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleAnimation}
        className="mt-10 w-full px-4 lg:px-0"
      >
        <h3 className="text-white text-center lg:text-lg mb-2">
          {isFrench ? "Mes Contributions" : "My Contributions"}
        </h3>

        <div className="w-full max-w-full overflow-x-auto flex justify-center">
          <GitHubCalendar
            username="fk-crafter"
            blockSize={12}
            blockMargin={5}
            fontSize={12}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
