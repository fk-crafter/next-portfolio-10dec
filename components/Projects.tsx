"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projectData } from "@/constants";
import { useLanguage } from "@/context/LanguageContext";

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
      className="flex flex-col items-center justify-center py-20 overflow-hidden z-20"
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
          <a
            key={index}
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
              className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]  transition-transform duration-300"
            >
              <Image
                src={project.src}
                alt={project.title}
                width={1000}
                height={1000}
                className="w-full h-[200px] object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Image
                      key={techIndex}
                      src={tech}
                      alt="Tech Icon"
                      width={40}
                      height={40}
                      className="hover:scale-110 transition-transform duration-200"
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
        ))}
      </div>
    </section>
  );
};

export default Projects;
