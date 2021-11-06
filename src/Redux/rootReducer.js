import { combineReducers } from "redux";
import navReducer from "./Navbar/navReducer";

const rootReducer = combineReducers({
  navbar: navReducer,
});
export default rootReducer;
