"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext"; // Importer le contexte

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { isFrench, toggleLanguage } = useLanguage(); // Accès au contexte

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        {/* Logo */}
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

        {/* Liens de navigation */}
        <div className="hidden lg:flex w-[500px] justify-between items-center lg:mr-16">
          <div className="flex w-full justify-between border border-[#3b82f6] bg-[#1e293b]/50 px-5 py-2 rounded-full text-gray-200">
            <a
              href="#about-me"
              className="hover:text-[#3b82f6] transition-all duration-300"
            >
              {isFrench ? "À propos" : "About me"}
            </a>
            <a
              href="#skills"
              className="hover:text-[#3b82f6] transition-all duration-300"
            >
              {isFrench ? "Compétences" : "Skills"}
            </a>
            <a
              href="#projects"
              className="hover:text-[#3b82f6] transition-all duration-300"
            >
              {isFrench ? "Projets" : "Projects"}
            </a>
            <a
              href="#contact"
              className="hover:text-[#3b82f6] transition-all duration-300"
            >
              {isFrench ? "Contact" : "Contact"}
            </a>
          </div>
        </div>

        {/* Bouton de changement de langue */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={toggleLanguage}
            className="bg-[#1e293b] text-gray-300 px-4 py-2 rounded hover:bg-[#3b82f6] transition-all duration-300"
          >
            {isFrench ? "EN" : "FR"}
          </button>
        </div>

        {/* Bouton burger pour mobile */}
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

        {/* Menu mobile */}
        {isOpen && (
          <div
            ref={menuRef}
            className="absolute top-[65px] left-0 w-full bg-[#0f172a] shadow-lg shadow-[#1e293b]/50 z-40 flex flex-col items-center py-4 space-y-4"
          >
            <a
              href="#about-me"
              className="text-gray-300 hover:text-[#3b82f6] transition-all duration-300"
            >
              {isFrench ? "À propos" : "About me"}
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-[#3b82f6] transition-all duration-300"
            >
              {isFrench ? "Compétences" : "Skills"}
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-[#3b82f6] transition-all duration-300"
            >
              {isFrench ? "Projets" : "Projects"}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-[#3b82f6] transition-all duration-300"
            >
              {isFrench ? "Contact" : "Contact"}
            </a>

            {/* Bouton de langue dans le menu mobile */}
            <button
              onClick={toggleLanguage}
              className="mt-4 bg-[#1e293b] text-gray-300 px-4 py-2 rounded hover:bg-[#3b82f6] transition-all duration-300"
            >
              {isFrench ? "EN" : "FR"}
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
