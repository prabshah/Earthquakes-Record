import { createStore, applyMiddleware } from "redux";
//import thunk from "redux-thunk";
import reduxPromise from "redux-promise";
import logger from "redux-logger";
import rootReducer from "./reducers";

let middlewares = [logger, reduxPromise];

export default function configureStore(initialState = []) {
  return createStore(rootReducer, applyMiddleware(...middlewares));
}
