import React, { useEffect, useContext } from "react";
import { OrganiserContext } from "../context";

import TodoItem from "./TodoItem";

export default function TodoList() {
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
    window.localStorage.setItem(TODO_LIST, listString);
  }, [list]);

  const listItems = state.list.map((todo, idx) => (
    <TodoItem key={idx} id={idx} item={todo} />
  ));

  return <ul className="todo__list">{listItems}</ul>;
}
