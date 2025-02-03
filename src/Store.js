import {thunk} from "redux-thunk";
import allReducers from "./combineReducers/State";
import { configureStore } from "@reduxjs/toolkit";



 export const store = configureStore({
    reducer: allReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  });
