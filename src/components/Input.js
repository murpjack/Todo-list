import React, { useContext } from "react";
import { OrganiserContext } from "../context";
import Future from "fluture/index.js";

import { addItem } from "../actions/index";

export default function Input() {
  const { state, dispatch } = useContext(OrganiserContext);
  const { list } = state;

  function submitNewItem(e) {
    if (e.key === "Enter" || e.which === 13) {
      const name = e.target.value;
      const id = list.length;

      const newItem = { id, name, isComplete: false };
      const setNewItem = [...list, newItem];

      Future.of(setNewItem)
        .map(addItem)
        .value(list => {
          dispatch(list);
          // reset input value
          e.target.value = "";
        });
    }
  }

  return (
    <div>
      <input
        id="inputTodo"
        placeholder="Add another task"
        type="text"
        onKeyDown={submitNewItem}
      />
      <button>+</button>
    </div>
  );
}
