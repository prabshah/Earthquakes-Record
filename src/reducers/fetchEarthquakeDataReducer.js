import { FETCH_EARTHQUAKE_DATA, FILTER_EARTHQUAKES } from "../actions/index";

const initialState = { list: [], filteredList: [] };
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_EARTHQUAKE_DATA:
      return {
        ...state,
        list: action.payload.data.features,
        filteredList: action.payload.data.features
      };
    case FILTER_EARTHQUAKES:
      return { ...state, filteredList: action.payload };
    default:
      return state;
  }
}
