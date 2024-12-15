// context/LanguageContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Définir le type pour le contexte
interface LanguageContextType {
  isFrench: boolean;
  toggleLanguage: () => void;
}

// Créer le contexte
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Hook personnalisé pour utiliser le contexte
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Provider du contexte
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [isFrench, setIsFrench] = useState(false);

  const toggleLanguage = () => setIsFrench((prev) => !prev);

  return (
    <LanguageContext.Provider value={{ isFrench, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
