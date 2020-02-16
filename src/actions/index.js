import {
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  TOGGLE_ITEM_COMPLETE
} from "./constants";

export const addItem = list => ({
  type: ADD_ITEM,
  payload: { list }
});

export const removeItem = list => ({
  type: REMOVE_ITEM,
  payload: { list }
});

export const editItem = list => ({
  type: EDIT_ITEM,
  payload: { list }
});

export const toggleItemComplete = list => ({
  type: TOGGLE_ITEM_COMPLETE,
  payload: { list }
});

export default {
  addItem,
  removeItem,
  editItem,
  toggleItemComplete
};
