import detectBrowserLanguage from "detect-browser-language";

export const returnLanguageKey = () =>
  localStorage.getItem("lang") || detectBrowserLanguage() || "en";
