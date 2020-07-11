import { GET_APPLICANTS } from "state-management/types-constants";

let initialState = {
  list: [],
  filterKey: "",
};

export default (state = initialState, action) => {
  return action.type === GET_APPLICANTS
    ? {
        ...state,
        list: action.payload,
      }
    : state;
};
