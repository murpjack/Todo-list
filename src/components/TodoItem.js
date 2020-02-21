import React from "react";
import { useDispatch, useTrackedState } from '../store';
import PropTypes from "prop-types";

import {
  REMOVE_ITEM,
  EDIT_ITEM,
  TOGGLE_ITEM_COMPLETE
} from "./constants";

export default function TodoItem({ item }) {
  const dispatch = useDispatch();
  const state = useTrackedState();
  const { list } = state;

  const toggleCompleted = () => dispatch({ type: TOGGLE_ITEM_COMPLETE, payload: { id: item.id }});

  const editItem = (e) => {
    if (e.key === "Enter" || e.which === 13) {
      return dispatch({ type: EDIT_ITEM, payload: { name: e.target.value }});
    }
  };

  const removeItem = () => dispatch({ type: REMOVE_ITEM, payload: { id: item.id }});

  return (
    <li className="todo__item item">
      <input
        type="checkbox"
        className={"item__toggle " + (item.isComplete ? "item__toggle--complete" : "")}
        onChange={toggleCompleted}
        checked={item.isComplete}
      />
      <input
        type="text"
        className="item__name"
        defaultValue={item.name}
        onKeyUp={editItem}
      />
      <button
        type="button"
        className="item__button item__button--remove"
        onClick={removeItem}
      >
        x
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired
};
