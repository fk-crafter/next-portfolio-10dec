"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { LanguageContextType } from "@/types";

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [isFrench, setIsFrench] = useState(false);

  const toggleLanguage = () => setIsFrench((prev) => !prev);

  return (
    <LanguageContext.Provider value={{ isFrench, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
