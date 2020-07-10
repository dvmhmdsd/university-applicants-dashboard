import { GET_MODE, SET_MODE } from "state-management/constants";

export const getMode = () => (dispatch) => {
  let mode =
    JSON.parse(localStorage.getItem("mode")) ||
    window.matchMedia("(prefers-color-scheme: dark)").matches ||
    "en";

  dispatch({
    type: GET_MODE,
    payload: mode,
  });
};

export const setMode = (mode) => (dispatch) => {
  localStorage.setItem("mode", mode);

  dispatch({
    type: SET_MODE,
    payload: mode,
  });
};
