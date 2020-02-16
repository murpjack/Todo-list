import React, { useReducer } from "react";
import "./App.css";
import { OrganiserContext } from "./context";

import initialState from "./initialState";
import reducer from "./reducers/index";

import TodoList from "./components/TodoList";
import Input from "./components/Input";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <OrganiserContext.Provider value={{ state, dispatch }}>
      <>
        <header className="App-header">WHAT TODO</header>
        <TodoList />
        <Input />
      </>
    </OrganiserContext.Provider>
  );
}
