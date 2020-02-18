import {
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  TOGGLE_ITEM_COMPLETE
} from "../actions/constants";

import initialState from "../initialState";

export default function reducer(state = initialState, {
  type,
  payload
}) {
  switch (type) {

    case ADD_ITEM:
      return {
        ...state,
        list: [...state.list, payload.item]
      };

    case REMOVE_ITEM:
      const list = state.list.filter(todo => todo.id !== payload.id);
      return {
        ...state, list
      };

    case EDIT_ITEM:
      return {
        ...state,
        list: state.list.map(todo =>
          todo.id === payload.id ? {
            ...todo,
            name: payload.name
          } : todo
        )
      };

    case TOGGLE_ITEM_COMPLETE:
      return {
        ...state,
        list: state.list.map(todo =>
          todo.id === payload.id ? {
            ...todo,
            isComplete: !todo.isComplete
          } : todo
        )
      };

    default:
      return state;
  }
}
