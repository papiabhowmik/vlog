import { createStore } from "redux";
import userReducers from "./userReducers";

const store = createStore(userReducers);


export default store;