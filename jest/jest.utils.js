import { render as rtlRender } from "@testing-library/react";
//craeteStore is for creating new store for wrapping testing components
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
//Memory router is used check manual routes/ BrowserRouter uses defaut
import { BrowserRouter, MemoryRouter, Router } from "react-router-dom";
import ReduxThunk from "redux-thunk";
// to access rest of reducers
import allReducers from "../src/combineReducers/State";

const middlewares = [ReduxThunk];
//custom render that includes redux provider as a wrapper with router
export const render = (
  ui,
  {
    initialState,
    store = createStore(
      allReducers,
      initialState,
      compose(applyMiddleware(...middlewares))
    ),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return (
      <Provider store={store}>
        <MemoryRouter>{children}</MemoryRouter>
      </Provider>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions, BrowserRouter, Router});
};

export * from "@testing-library/react";
