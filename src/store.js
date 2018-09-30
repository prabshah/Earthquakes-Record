import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import logger from "redux-logger";
import rootReducer from "./reducers";

let middlewares = [logger, reduxPromise];

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(...middlewares));
}
