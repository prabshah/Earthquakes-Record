import axios from "axios";
import store from "../store";
const apiUrl =
  "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02";

export const FETCH_EARTHQUAKE_DATA = "FETCH_EARTHQUAKE_DATA";
export const FILTER_EARTHQUAKES = "FILTER_EARTHQUAKES";

export const fetchEarthquakeData = () => {
  const request = axios.get(apiUrl);
  return {
    type: FETCH_EARTHQUAKE_DATA,
    payload: request
  };
};

export const filterByMagnitude = (magnitude, state) => {
  const listFilteredByMagnitude = state.earthquakes.list.filter(
    list => parseFloat(list.properties.mag) === parseFloat(magnitude)
  );
  return {
    type: FILTER_EARTHQUAKES,
    payload: listFilteredByMagnitude
  };
};

export const filterByMagType = (magType, state) => {
  const listFilteredByMagType = state.earthquakes.list.filter(
    list => list.properties.magType === magType
  );
  return {
    type: FILTER_EARTHQUAKES,
    payload: listFilteredByMagType
  };
};
