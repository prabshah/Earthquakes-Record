import { combineReducers } from "redux";
import fetchEarthquakeDataReducer from "./fetchEarthquakeDataReducer";
import filterByMagnitudeReducer from "./filterByMagnitudeReducer";
const rootReducer = combineReducers({
  earthquake: fetchEarthquakeDataReducer,
  filterByMagnitude: filterByMagnitudeReducer
});

export default rootReducer;
