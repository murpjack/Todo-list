import {
  useReducer
} from "react";
import { createContainer } from 'react-tracked';

import {
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  TOGGLE_ITEM_COMPLETE
} from "../actions/constants";

import TODO_LIST from "./constants";


export const initialState = {
  list: localStorage.getItem(TODO_LIST) === null ? [{
      id: 0,
      name: "Write list",
      isComplete: true
    },
    {
      id: 1,
      name: "看电影",
      isComplete: false
    },
    {
      id: 2,
      name: "Make something",
      isComplete: false
    }
  ] : JSON.parse(localStorage.getItem(TODO_LIST))
};


let count = 2;
export default function reducer(state, {
  type,
  payload
}) {
  switch (type) {
    case ADD_ITEM:
      return {
        list: [
          ...state.list,
          {
            id: count += 1,
            payload.name,
            isComplete: false
          }
        ]
      };

    case REMOVE_ITEM:
      return {
        list: state.list.filter(todo => todo.id !== payload.id)
      };

    case EDIT_ITEM:
      return {
        list: state.list.map(todo => todo.id === payload.item.id ? {
            ...todo,
            name: payload.item.name
          }
        }: todo
      )
  };

  case TOGGLE_ITEM_COMPLETE:
    return {
      list: state.list.map(todo =>
        todo.id === payload.id ? {
          ...todo,
          isComplete: !todo.isComplete
        } :
        todo
      )
    };

  default:
  return state;
}

const useValue = () => useReducer(reducer, initialState);

export const {
  Provider,
  useTrackedState,
  useUpdate: useDispatch
} = createContainer(useValue);

export default {
  Provider,
  useTrackedState,
  useUpdate
}
