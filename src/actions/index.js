import {
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  TOGGLE_ITEM_COMPLETE
} from "./constants";

let todoIndex = 3;
export const addItem = name => ({
  type: ADD_ITEM,
  payload: { item: {id: todoIndex++, name, isComplete: false } }
});

export const removeItem = item => ({
  type: REMOVE_ITEM,
  payload: { item }
});

export const editItem = item => ({
  type: EDIT_ITEM,
  payload: { item }
});

export const toggleItemComplete = item => ({
  type: TOGGLE_ITEM_COMPLETE,
  payload: { item }
});

export default {
  addItem,
  removeItem,
  editItem,
  toggleItemComplete
};
