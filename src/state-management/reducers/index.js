import { combineReducers } from "redux";
import modeReducer from "./modeReducer";
import languageReducer from "./languageReducer";
import applicantsReducer from "./applicantsReducer";

export default combineReducers({
  students: applicantsReducer,
  mode: modeReducer,
  lang: languageReducer,
});
