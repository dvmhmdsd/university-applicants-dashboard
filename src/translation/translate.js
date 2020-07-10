import { returnLanguageKey } from "helpers/language";
import translation from "./translation.json";

export const translate = (key) => {
  let lang = returnLanguageKey();

  return translation[lang][key];
};
