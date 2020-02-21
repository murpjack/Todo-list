import React, { useContext } from "react";
import { OrganiserContext } from "../context";
import PropTypes from "prop-types";
import { removeItem } from "../actions/index";

export const ButtonRemoveItem = ({ current }) => {
  const { dispatch } = useContext(OrganiserContext);

  const removeItemClick = () => {
    const removeCurrent = removeItem(current);
    dispatch(removeCurrent);
  };

  return (
    <button
      type="button"
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
