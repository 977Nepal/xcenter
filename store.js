import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import allReducers from "./src/combineReducers/State";
import { updateReduxStore, reduxStore } from "./src/combineReducers/Storage";

const middleware = applyMiddleware(thunk);
const store = createStore(
    allReducers,
    middleware
)

store.subscribe(() => {
    updateReduxStore(store)
})

export default store;