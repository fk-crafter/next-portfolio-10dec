"use client";

import React from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const ProjectModal = ({
  project,
  onClose,
}: {
  project: any;
  onClose: () => void;
}) => {
  return (
    <Dialog
      open={true}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative z-50"
      >
        <Dialog.Panel className="w-[90vw] max-w-3xl rounded-2xl p-6 backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl font-bold transition"
            aria-label="Close modal"
          >
            &times;
          </button>

          <h2 className="text-3xl font-semibold mb-4">{project.title}</h2>

          <p className="text-gray-200 mb-6 leading-relaxed">
            {project.description}
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2 text-gray-300">
              Technologies used:
            </h3>
            <div className="flex gap-4 flex-wrap">
              {project.technologies.map((tech: string, i: number) => (
                <Image
                  key={i}
                  src={tech}
                  alt="Technology Logo"
                  width={40}
                  height={40}
                  className="rounded bg-white/10 p-1 backdrop-blur-sm"
                />
              ))}
            </div>
          </div>

          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition text-white font-medium backdrop-blur-sm border border-white/30"
            >
              Visit Website
            </Link>
          )}
        </Dialog.Panel>
      </motion.div>
    </Dialog>
  );
};

export default ProjectModal;
