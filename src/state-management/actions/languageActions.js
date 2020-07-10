import { GET_LANGUAGE, SET_LANGUAGE } from "state-management/constants";
import { returnLanguageKey } from "helpers/language";

export const getLanguageKey = () => (dispatch) => {
  let languageKey =
    returnLanguageKey()

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
