import detectBrowserLanguage from "detect-browser-language";
import translation from "./translation.json";

export const translate = (key) => {
  let lang =
    JSON.parse(localStorage.getItem("lang")) || detectBrowserLanguage() || "en";

  return translation[lang][key];
};
