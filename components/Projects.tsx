"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projectData } from "@/constants";
import { useLanguage } from "@/context/LanguageContext";
import { Marquee } from "@/components/magicui/marquee";
import GitHubCalendar from "react-github-calendar";

const ProjectCard = ({ project }: { project: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-96 h-56 cursor-pointer overflow-hidden rounded-xl mx-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <Image
          src={project.src}
          alt={project.title}
          width={400}
          height={250}
          quality={100}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black/60 flex justify-center items-center transition-opacity duration-300">
            <div className="flex gap-4">
              {project.technologies.map((tech: string, techIndex: number) => (
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
        )}
      </a>
    </div>
  );
};

const Projects = () => {
  const { isFrench } = useLanguage();

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center overflow-hidden z-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#7b92b4] to-[#6f87ae] mb-10"
      >
        {isFrench ? "Mes Projets" : "My Projects"}
      </motion.h1>

      <div className="w-full max-w-6xl">
        <Marquee pauseOnHover className="[--duration:20s] flex gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </Marquee>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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
