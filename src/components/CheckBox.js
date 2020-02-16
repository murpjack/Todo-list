import React, { useContext } from "react";
import { OrganiserContext } from "../context";
import PropTypes from "prop-types";
import Future from "fluture/index.js";
import { toggleItemComplete } from "../actions/index";

export const CheckBox = ({ currentIdx, current }) => {
  const { state, dispatch } = useContext(OrganiserContext);
  const { list } = state;
  const { isComplete } = current;

  function toggleCompleteListItem() {
    const updatedList = list.map((item, idx) => {
      if (idx === currentIdx) {
        return { ...item, isComplete: !item.isComplete };
      }
      return item;
    });
    console.log("checked", updatedList);
    Future.of(updatedList)
      .map(toggleItemComplete)
      .value(dispatch);
  }

  return (
    <input
      type="checkbox"
      className={isComplete ? "todo__item item item--complete" : "todo__item"}
      onChange={toggleCompleteListItem}
      checked={isComplete}
    />
  );
};
CheckBox.propTypes = {
  currentIdx: PropTypes.number.isRequired,
  current: PropTypes.object.isRequired
};

export default CheckBox;
