import React from "react";
import { useDispatch, useTrackedState } from '../store';
import getListFromStorage from '../utils';
import { removeItem } from "../actions/index";

import TodoItem from "./TodoItem";

export default function TodoList() {
  const dispatch = useDispatch();
  const state = useTrackedState();
  const { list } = state;

  useEffect(() => {
    getListFromStorage(list);
  });

  const removeItemClick = (current) => {
    const newList = list.filter(todo => {
      if (todo.id !== current.id && todo.name !== current.name) return todo;
      return false;
    });

    console.log(33,newList);
    const removeCurrent = removeItem(newList);

    console.log(34,removeCurrent);
    dispatch(removeCurrent);
  };

  return <ul className="todo__list">{list.map((item, idx) => (
    <TodoItem key={idx}
    item={item}
    removeItemClick={removeItemClick}/>
  ))}</ul>;
}
