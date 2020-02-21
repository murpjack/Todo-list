import React, { useContext } from "react";
import { OrganiserContext } from "../context";
import PropTypes from "prop-types";

import { editItem } from "../actions/index";
export const ItemName = ({ current }) => {
  const { dispatch } = useContext(OrganiserContext);

  function updateListItemName(e) {
    const target = e.target;
    if (e.key === "Enter" || e.which === 13) {
      const newItem = { ...current, name: target.value };

      const updated = editItem(newItem);
      console.log(12, updated)
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
