import { combineReducers } from "redux";
import fetchEarthquakeDataReducer from "./fetchEarthquakeDataReducer";

const rootReducer = combineReducers({
  earthquakes: fetchEarthquakeDataReducer
});

export default rootReducer;
