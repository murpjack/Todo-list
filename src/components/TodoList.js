import React, { useEffect, useContext } from "react";
import { OrganiserContext } from "../context";

import TodoItem from "./TodoItem";

export default function TodoList() {
  const { state } = useContext(OrganiserContext);
  const { list } = state;

  useEffect(() => {
    const TODO_LIST = "TODO_LIST";
    const listString = list.reduce((acc, curr, index) => {
      console.log(curr);
      if (index === 0) {
        return acc + `[{name:"${curr.name}", isComplete:${curr.isComplete} }`;
      } else if (index === list.length - 1) {
        return acc + `{name:"${curr.name}", isComplete:${curr.isComplete} }]`;
      } else {
        // separate list objects with a comma
        return acc + `, { name:"${curr.name}", isComplete:${curr.isComplete} }`;
      }
    }, "");
    console.log(listString);
    console.log(JSON.parse(listString));
    window.localStorage.setItem(TODO_LIST, listString);
  }, [list]);

  return (
    <ul className="todo__list">
      {state.list.map((todo, idx) => (
        <TodoItem key={idx} id={idx} item={todo} />
      ))}
    </ul>
  );
}
