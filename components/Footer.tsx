"use client";

import React from "react";
import { RxGithubLogo } from "react-icons/rx";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

const Footer = () => {
  const { isFrench } = useLanguage();

  return (
    <div className="w-full bg-[#0f172a] text-gray-200 shadow-lg p-5 relative z-[20]">
      <div className="flex flex-col items-center justify-center gap-3">
        <Link
          href="https://github.com/fk-crafter"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[18px] font-semibold hover:text-[#3b82f6] transition-all duration-300"
          style={{ cursor: "pointer" }}
        >
          <RxGithubLogo className="text-2xl" />
          <span>GitHub</span>
        </Link>

        <div className="text-sm text-gray-400 mt-2">
          {isFrench
            ? "FK-Crafter | Tous droits réservés"
            : "FK-Crafter | All Rights Reserved"}
        </div>
      </div>
    </div>
  );
};

export default Footer;
