import { createContext, useState } from "react";
export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  function toggleFunction() {
    setLanguage((prevLang) => (prevLang === "en" ? "it" : "en"));
  }
  return (
    <LanguageContext.Provider value={{ language, toggleFunction }}>
      {children}
    </LanguageContext.Provider>
  );
}
