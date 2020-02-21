import {
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  TOGGLE_ITEM_COMPLETE
} from "./constants";

let todoIndex = 2;
export const addItem = name => ({
  type: ADD_ITEM,
  payload: { item: {id: todoIndex += 1, name, isComplete: false } }
});

export const removeItem = list => {
  console.log(34,list);
  return {
  type: REMOVE_ITEM,
  payload: { list }
}};

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
