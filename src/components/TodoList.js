import React, { useContext } from "react";
import { OrganiserContext } from "../context";

import TodoItem from "./TodoItem";

export default function TodoList() {
  const { state } = useContext(OrganiserContext);

  return (
    <ul>
      {state.list.map((todo, idx) => (
        <TodoItem key={idx} id={idx} item={todo} />
      ))}
    </ul>
  );
}
