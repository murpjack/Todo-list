import React, { useContext } from "react";
import { OrganiserContext } from "../context";
import PropTypes from "prop-types";
import Future from "fluture/index.js";
import { removeItem } from "../actions/index";

export const ButtonRemoveItem = ({ currentIdx }) => {
  const { state, dispatch } = useContext(OrganiserContext);
  const { list } = state;

  function removeItemClick() {
    const updatedList = list.filter((item, idx) => {
      if (idx !== currentIdx) return item;
      return false;
    });

    Future.of(updatedList)
      .map(removeItem)
      .value(dispatch);
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
  currentIdx: PropTypes.number.isRequired,
  current: PropTypes.object.isRequired
};

export default ButtonRemoveItem;
