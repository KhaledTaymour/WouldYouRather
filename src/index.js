import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "container/app/App.js";

// store
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "redux/reducers";
import middleware from "./middleware";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
