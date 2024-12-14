"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

import fr from "@/public/locales/fr/fr.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const text = {
    about: language === "FR" ? fr.navbar.about : "About me",
    skills: language === "FR" ? fr.navbar.skills : "Skills",
    projects: language === "FR" ? fr.navbar.projects : "Projects",
    contact: language === "FR" ? fr.navbar.contact : "Contact",
  };

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#1e293b]/50 bg-[#0f172a]/80 backdrop-blur-lg z-50 px-6"
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a href="#about-me" className="flex items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 text-gray-300 hover:text-[#3b82f6] transition-all duration-300">
            Fk-Crafter
          </span>
        </a>

        <div className="hidden lg:flex w-[500px] justify-between items-center lg:mr-16">
          <div className="flex w-full justify-between border border-[#3b82f6] bg-[#1e293b]/50 px-5 py-2 rounded-full text-gray-200">
            <a
              href="#about-me"
              className="hover:text-[#3b82f6] transition-all duration-300"
            >
              {text.about}
            </a>
            <a
              href="#skills"
              className="hover:text-[#3b82f6] transition-all duration-300"
            >
              {text.skills}
            </a>
            <a
              href="#projects"
              className="hover:text-[#3b82f6] transition-all duration-300"
            >
              {text.projects}
            </a>
            <a
              href="#contact"
              className="hover:text-[#3b82f6] transition-all duration-300"
            >
              {text.contact}
            </a>
          </div>
        </div>

        <div className="absolute top-[80px] right-[20px] flex gap-2">
          <button
            onClick={() => setLanguage("EN")}
            className={`px-3 py-1 font-semibold rounded-md transition-all duration-300 ${
              language === "EN"
                ? "bg-[#3b82f6] text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage("FR")}
            className={`px-3 py-1 font-semibold rounded-md transition-all duration-300 ${
              language === "FR"
                ? "bg-[#3b82f6] text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            FR
          </button>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex">
          <a
            href="https://github.com/fk-crafter"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1e40af] hover:bg-[#3b82f6] shadow-lg shadow-[#3b82f6]/50 transition-all duration-300"
          >
            <Image
              src="/github-142-svgrepo-com.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="invert"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
