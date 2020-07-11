import { combineReducers } from "redux";
import languageReducer from "./languageReducer";
import applicantsReducer from "./applicantsReducer";

export default combineReducers({
  applicants: applicantsReducer,
  lang: languageReducer,
});
