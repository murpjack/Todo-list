import React, { useContext } from "react";
import { OrganiserContext } from "../context";
import PropTypes from "prop-types";
import Future from "fluture/index.js";

import { editItem } from "../actions/index";
export const ItemName = ({ current }) => {
  const { state, dispatch } = useContext(OrganiserContext);
  const { list } = state;

  function updateListItemName(e) {
    const target = e.target;
    if (e.key === "Enter" || e.which === 13) {
      const newItem = { ...current, name: target.value };

      const updated = editItem(newItem);
      dispatch(updated);
    }
  }

  return (
    <input
    className="item__name"
      id="inputTodo"
      defaultValue={current.name}
      type="text"
      onKeyUp={updateListItemName}
    />
  );
};

ItemName.propTypes = {
  current: PropTypes.object.isRequired
};

export default ItemName;
