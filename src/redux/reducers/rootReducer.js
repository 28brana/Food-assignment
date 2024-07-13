import { combineReducers } from "@reduxjs/toolkit";
import mainReducer from "./mainReducer";
const rootReducer = combineReducers({ favorites: mainReducer, });

export default rootReducer;