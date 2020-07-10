import { GET_MODE, SET_MODE } from "state-management/constants";

let initialState = {
  status: JSON.parse(localStorage.getItem("mode")) || "light",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MODE:
    case SET_MODE:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
