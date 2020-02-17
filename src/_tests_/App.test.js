import React, { useReducer } from "react";
import "./App.css";
import { OrganiserContext } from "./context";

import initialState from "../initialState";
import reducer from "../reducers/index";

import App from "../App";
import TodoList from "../components/TodoList";
import Input from "../components/Input";

const TestHookReducer = () => {
  const [reducerState, dispatch] = useReducer(Reducer, initialState)

describe("App renders", () => {
  it("TodoList renders successfully", () => {
    
  });
});
