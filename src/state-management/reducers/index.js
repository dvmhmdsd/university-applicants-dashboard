import { combineReducers } from "redux";
import modeReducer from "./modeReducer";
import languageReducer from "./languageReducer";
import studentsReducer from "./studentsReducer";

export default combineReducers({
  students: studentsReducer,
  mode: modeReducer,
  lang: languageReducer,
});
