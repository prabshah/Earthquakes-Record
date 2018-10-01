import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import registerServiceWorker from "./registerServiceWorker";

import App from "./App";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
