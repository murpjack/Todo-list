import React, { useReducer } from "react";
import renderer from 'react-test-renderer';
// import { OrganiserContext } from "./context";
import App from "../App";

// import initialState from "../initialState";
// import reducer from "../reducers/index";

// const TestHookReducer = () => {
//   const [reducerState, dispatch] = useReducer(Reducer, initialState)


describe("App renders", () => {
  it("TodoList renders successfully", () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
