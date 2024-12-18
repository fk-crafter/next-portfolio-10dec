export interface SkillDataProps {
  src: string;
  width: number;
  height: number;
  index: number;
  customClass?: string;
}

export interface LanguageContextType {
  isFrench: boolean;
  toggleLanguage: () => void;
}
