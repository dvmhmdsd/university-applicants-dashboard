import { GET_STUDENTS } from "state-management/constants";

let initialState = {
  list: [],
  filterKey: "",
};

export default (state = initialState, action) => {
  return action.type === GET_STUDENTS
    ? {
        ...state,
        list: action.payload,
      }
    : state;
};
