import { GET_LANGUAGE, SET_LANGUAGE } from "state-management/types-constants";
import { returnLanguageKey } from "helpers/language";

let initialState = {
  key: returnLanguageKey(),
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
