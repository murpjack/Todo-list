import React, { useContext } from "react";
import { OrganiserContext } from "../context";
import PropTypes from "prop-types";
import Future from "fluture/index.js";
import { removeItem } from "../actions/index";

export const ButtonRemoveItem = ({ current }) => {
  const { state, dispatch } = useContext(OrganiserContext);
  const { list } = state;

  function removeItemClick() {
      const removeCurrent = removeItem(current);
      dispatch(removeCurrent);
  }

  return (
    <button
      className="item__button item__button--remove"
      onClick={removeItemClick}
    >
      x
    </button>
  );
};
ButtonRemoveItem.propTypes = {
  current: PropTypes.object.isRequired
};

export default ButtonRemoveItem;
