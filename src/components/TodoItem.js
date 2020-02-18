import React from "react";
import PropTypes from "prop-types";

import CheckBox from "./CheckBox";
import ItemName from "./ItemName";
import ButtonRemoveItem from "./ButtonRemoveItem";

export default function TodoItem({ item }) {
  return (
    <li className="todo__item item">
      <CheckBox current={item} />
      <ItemName current={item} />
      <ButtonRemoveItem current={item} />
    </li>
  );
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired
};
