import React, { useContext } from "react";
import { OrganiserContext } from "../context";

import { addItem } from "../actions/index";

export default function Input() {
  const { dispatch } = useContext(OrganiserContext);

  function submitNewItem(e) {
    const target = e.target;
    const name = target.value;
    if (name.length > 0) {
      if (e.key === "Enter" || e.which === 13) {
        const added = addItem(name);
        console.log(12, added.payload);
        dispatch(added);
        // reset input value
        target.value = "";
      }
    }
  }

  return (
    <div>
      <input
        className="todo__input"
        placeholder="+ Add another task"
        type="text"
        maxLength="70"
        onKeyDown={submitNewItem}
      />{" "}
    </div>
  );
}
