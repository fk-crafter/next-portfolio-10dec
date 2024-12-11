import React from "react";
import { RxGithubLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-5">
      <div className="flex flex-col items-center justify-center">
        {/* Lien GitHub */}
        <a
          href="https://github.com/fk-crafter"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[18px] font-semibold hover:text-[#6e5494] transition-all duration-300"
          style={{ cursor: "pointer" }} // Assure le curseur cliquable
        >
          <RxGithubLogo className="text-2xl" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
