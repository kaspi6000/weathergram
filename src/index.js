import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";

// mobx store
import RootStore from "./stores";

const root = new RootStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider {...root}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
