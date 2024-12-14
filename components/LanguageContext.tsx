"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type LanguageType = "en" | "fr"; // Définition stricte des langues disponibles

interface LanguageContextProps {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<LanguageType>("en");

  useEffect(() => {
    const storedLanguage =
      (localStorage.getItem("language") as LanguageType) || "en";
    setLanguage(storedLanguage);
  }, []);

  const changeLanguage = (lang: LanguageType) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
