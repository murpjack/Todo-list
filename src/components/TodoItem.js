import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";

import { OrganiserContext } from "../context";

import CheckBox from "./CheckBox";
import ItemName from "./ItemName";
import ButtonRemoveItem from "./ButtonRemoveItem";

export default function TodoItem({ item }) {
  const { state } = useContext(OrganiserContext);
  const { list } = state;

  useEffect(() => {
    const TODO_LIST = "TODO_LIST";
    const listString = list.reduce((acc, curr, index) => {
      console.log(index);
      if (index === 0) {
        return (
          acc +
          `[{"id":${curr.id},"name":"${curr.name}","isComplete":${curr.isComplete}},`
        );
      } else if (index === list.length - 1) {
        return (
          acc +
          `{"id":${curr.id},"name":"${curr.name}","isComplete":${curr.isComplete}}]`
        );
      } else {
        // separate list objects with a comma
        return (
          acc +
          `{"id":${curr.id},"name":"${curr.name}","isComplete":${curr.isComplete}},`
        );
      }
    }, "");
    console.log(listString);
    console.log(JSON.parse(listString));
    localStorage.setItem(TODO_LIST, listString);
  });

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
