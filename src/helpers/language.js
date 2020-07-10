import detectBrowserLanguage from "detect-browser-language";

export const returnLanguageKey = () =>
  JSON.parse(localStorage.getItem("lang")) || detectBrowserLanguage() || "en";
