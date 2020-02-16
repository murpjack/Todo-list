import React from "react";
import PropTypes from "prop-types";

import CheckBox from "./CheckBox";
import ItemName from "./ItemName";
import ButtonRemoveItem from "./ButtonRemoveItem";

export default function TodoItem({ id, item }) {
  return (
    <li>
      <CheckBox currentIdx={id} current={item} />
      <ItemName currentIdx={id} current={item} />
      <ButtonRemoveItem currentIdx={id} current={item} />
    </li>
  );
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired
};
