import React, { useContext } from "react";
import { OrganiserContext } from "../context";
import PropTypes from "prop-types";
import { toggleItemComplete } from "../actions/index";

export const CheckBox = ({ current }) => {
  const { dispatch } = useContext(OrganiserContext);
  // const { list } = state;
  const { isComplete } = current;

  function toggleCompleteListItem() {
    const toggled = toggleItemComplete(current);
    dispatch(toggled);
  }

  return (
    <input
      type="checkbox"
      className={"item__toggle " + (isComplete ? "item__toggle--complete" : "")}
      onChange={toggleCompleteListItem}
      checked={isComplete}
    />
  );
};
CheckBox.propTypes = {
  current: PropTypes.object.isRequired
};

export default CheckBox;
