import detectBrowserLanguage from "detect-browser-language";

/**
 * We didn't check the url here as there's no routing and also we
 * detect the user language from the browser
 */
export const returnLanguageKey = () =>
  localStorage.getItem("lang") || detectBrowserLanguage() || "en";
