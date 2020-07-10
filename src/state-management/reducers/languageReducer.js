import { GET_LANGUAGE, SET_LANGUAGE } from "state-management/constants";

let initialState = {
  key: JSON.parse(localStorage.getItem("lang")) || "en",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LANGUAGE:
    case SET_LANGUAGE:
      return {
        ...state,
        key: action.payload,
      };
    default:
      return state;
  }
};
