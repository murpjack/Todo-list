import React, { useContext } from "react";
import { OrganiserContext } from "../context";
import Future from "fluture/index.js";

import { addItem } from "../actions/index";

export default function Input() {
  const { state, dispatch } = useContext(OrganiserContext);
  const { list } = state;

  function submitNewItem(e) {
    const target = e.target;
    const isButtonClick = target.className.indexOf("todo__button") > -1;
    const id = list.length;

    if (isButtonClick) {
      const name = target.previousElementSibling.value;
      if (name.length > 0) {
        const newItem = { name, isComplete: false };
        const setNewItem = [...list, newItem];

        Future.of(setNewItem)
          .map(addItem)
          .value(list => {
            dispatch(list);
            // reset input value
            target.previousElementSibling.value = "";
          });
      }
    } else {
      // otherwise expect the enter button to add
      const name = e.target.value;
      if (name.length > 0) {
        if (e.key === "Enter" || e.which === 13) {
          const newItem = { name, isComplete: false };
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
    }
  }

  return (
    <div>
      <input
        className="todo__input"
        id="inputTodo"
        placeholder="Add another task"
        type="text"
        maxLength="70"
        onKeyDown={submitNewItem}
      />
      <button
        className="todo__button item__button--add"
        onClick={submitNewItem}
      >
        +
      </button>
    </div>
  );
}
