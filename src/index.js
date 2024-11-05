import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import ContactReducer from "./ContactReducer";
import App from "./App";
import { createStore } from "redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
let reducerGroup = combineReducers({
  contact: ContactReducer,
});
let store = createStore(reducerGroup, applyMiddleware(thunk));
root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
