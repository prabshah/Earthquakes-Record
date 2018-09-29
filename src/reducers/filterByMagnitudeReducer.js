import { FILTER_BY_MAGNITUDE } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FILTER_BY_MAGNITUDE:
      return [...action.payload.data.features, ...state];
    default:
      return state;
  }
}
