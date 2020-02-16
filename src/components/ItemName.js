import React, { useContext } from "react";
import { OrganiserContext } from "../context";
import PropTypes from "prop-types";
import Future from "fluture/index.js";

import { editItem } from "../actions/index";
export const ItemName = ({ currentIdx, current }) => {
  const { state, dispatch } = useContext(OrganiserContext);
  const { list } = state;
  console.log(1, list[currentIdx].name, currentIdx, list);
  // console.log(45, list[currentIdx]);

  function updateListItemName(e) {
    const currentItemName = e.target.value;
    if (e.key === "Enter" || e.which === 13) {
      const updatedList = list.map((item, idx) => {
        if (idx === currentIdx) {
          return { ...item, name: currentItemName };
        }
        return item;
      });
      console.log("named", updatedList);

      Future.of(updatedList)
        .map(editItem)
        .value(dispatch);
    }
  }
  return (
    <input
      id="inputTodo"
      defaultValue={current.name}
      type="text"
      onKeyUp={updateListItemName}
    />
  );
};

ItemName.propTypes = {
  currentIdx: PropTypes.number.isRequired,
  current: PropTypes.object.isRequired
};

export default ItemName;
