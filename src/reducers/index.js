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
        list: [...state.list, payload.item]
      };

    case REMOVE_ITEM:
      return {
        ...state,
        list: state.list.filter(todo => {
          if (todo.id !== payload.item.id) return todo;
          return false;
        })
      };

    case EDIT_ITEM:
      return {
        ...state,
        list: state.list.map(todo =>
          todo.id === payload.item.id
            ? {
                ...todo,
                name: payload.item.name
              }
            : todo
        )
      };

    case TOGGLE_ITEM_COMPLETE:
      return {
        ...state,
        list: state.list.map(todo =>
          todo.id === payload.item.id
            ? {
                ...todo,
                isComplete: !todo.isComplete
              }
            : todo
        )
      };

    default:
      return state;
  }
}
