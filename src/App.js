import React from "react";
import { Provider } from './store';

import TodoList from "./components/TodoList";
import Input from "./components/Input";

export default function App() {
  return (
    <Provider>
      <div className="todo">
        <header className="App-header">WHAT TODO</header>
        <TodoList />
        <Input />
      </div>
    </Provider>
  );
}
