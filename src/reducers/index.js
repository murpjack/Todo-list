import {
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  TOGGLE_ITEM_COMPLETE
} from "../actions/constants";

import initialState from "../initialState";

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        list: payload.list
      };
    case REMOVE_ITEM:
      return {
        ...state,
        list: payload.list
      };
    case EDIT_ITEM:
      return {
        ...state,
        list: payload.list
      };
    case TOGGLE_ITEM_COMPLETE:
      return {
        ...state,
        list: payload.list
      };
    default:
      return state;
  }
}
