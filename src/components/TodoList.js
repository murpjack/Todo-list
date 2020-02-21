import React, { useContext } from "react";
import { OrganiserContext } from "../context";

import TodoItem from "./TodoItem";

export default function TodoList() {
  const { state } = useContext(OrganiserContext);
  const { list } = state;

  const listItems = list.map((todo, idx) => (
    <TodoItem key={idx} id={idx} item={todo} />
  ));

  return <ul className="todo__list">{listItems}</ul>;
}
