import { GET_LANGUAGE, SET_LANGUAGE } from "state-management/constants";
import detectBrowserLanguage from "detect-browser-language";

export const getLanguageKey = () => (dispatch) => {
  let languageKey =
    JSON.parse(localStorage.getItem("lang")) || detectBrowserLanguage() || "en";

  dispatch({
    type: GET_LANGUAGE,
    payload: languageKey,
  });
};

export const setLanguageKey = (key) => (dispatch) => {
  localStorage.setItem("lang", key);

  dispatch({
    type: SET_LANGUAGE,
    payload: key,
  });
};
