import { GET_STUDENTS, FILTER_STUDENTS } from "state-management/constants";

let initialState = {
  list: [],
  filterKey: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        list: action.payload,
      };
    case FILTER_STUDENTS:
      return {
        ...state,
        filterKey: action.payload,
      };
    default:
      return state;
  }
};
