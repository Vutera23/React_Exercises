import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function Test() {
  const { language, toggleFunction } = useContext(LanguageContext);
  return (
    <div>
      <button onClick={toggleFunction}>
        {language === "en" ? "it" : "en"}
      </button>
      <div>
        <h1>{language === "en" ? "Benvenuto" : "Welcome"}</h1>
        <p>{language === "en" ? "Questo" : "That"}</p>
      </div>
    </div>
  );
}
