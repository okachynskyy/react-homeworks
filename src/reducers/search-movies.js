import { SEARCH_MOVIES } from "../actions";

export default function (state = [], action) {
  switch (action.type) {
    case SEARCH_MOVIES:
      return action.payload.data.data;
  }
  return state;
}
