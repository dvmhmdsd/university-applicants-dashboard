import { returnLanguageKey } from "helpers/language";
import translation from "./translation.json";

/**
 * The function translates the word according to a key provided by
 * the user of the function. So, we need to return the language code
 * which is stored in the localStorage or by auto detecting the user language from
 * the browser
 * @param {string} key
 */
export const translate = (key) => {
  let lang = returnLanguageKey();

  return translation[lang][key];
};
