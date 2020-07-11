import { combineReducers } from "redux";
import languageReducer from "./languageReducer";
import applicantsReducer from "./applicantsReducer";

export default combineReducers({
  students: applicantsReducer,
  lang: languageReducer,
});
