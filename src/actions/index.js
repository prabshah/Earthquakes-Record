import axios from "axios";

const apiUrl =
  "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02";

export const FETCH_EARTHQUAKE_DATA = "FETCH_EARTHQUAKE_DATA";

export const FILTER_BY_MAGNITUDE = "FILTER_BY_MAGNITUDE";

export const fetchEarthquakeData = () => {
  const request = axios.get(apiUrl);
  console.log("mmmmmmmmxxxxxxxxxxxxxxxxxxxxxxxxx", request);
  return {
    type: "FETCH_EARTHQUAKE_DATA",
    payload: request
  };
};

//! not working
export const filterByMagnitude = magnitude => dispatch => {
  dispatch({
    type: "FILTER_BY_MAGNITUDE",
    magnitude
  });
};
