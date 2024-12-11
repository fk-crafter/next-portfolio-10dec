"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const cardAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const titleAnimation = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Projects = () => {
  const projectData = [
    {
      src: "/site1.png",
      title: "Lorem Ipsum 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      src: "/site2.png",
      title: "Lorem Ipsum 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      src: "/site3.png",
      title: "Lorem Ipsum 3",
      description:
        "Lorem ipsum dolor sit a/met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 overflow-hidden"
    >
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleAnimation}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#7b92b4] to-[#6f87ae] mb-10"
      >
        My Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-10">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={cardAnimation}
            className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:scale-105 transition-transform duration-300"
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
        ))}
      </div>
    </section>
  );
};

export default Projects;
