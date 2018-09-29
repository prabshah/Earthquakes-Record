import { FETCH_EARTHQUAKE_DATA } from "../actions/index";
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_EARTHQUAKE_DATA:
      return [...action.payload.data.features, ...state];
    default:
      return state;
  }
}
