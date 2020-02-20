import React, {
  useContext
} from "react";

import {
  shallow
} from "enzyme";

import {
  OrganiserContext
} from "../context";

import {
  addItem,
  removeItem,
  editItem,
  toggleItemComplete
} from "../actions/index";

import renderer from 'react-test-renderer';

import App from "../App";
import ButtonRemoveItem from "../components/ButtonRemoveItem";

it("renders", () => {
  shallow(<App />);
});

describe("App", () => {
  it("renders successfully", () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("ButtonRemoveItem", () => {
      it("Test click event", () => {
          const mockCallBack = jest.fn();
          const item = {
            id: 1,
            name: "Write Todo list",
            isComplete: false
          };
          const button = shallow( <ButtonRemoveItem current={ item } />);
            button.find("button").simulate("click");
            // expect(dispatch.mock.calls.length).toEqual(1);
            console.log(1, mockCallBack)
            console.log(2, mockCallBack.mock.calls)
            expect(mockCallBack.mock.calls.length).toEqual(1);
          });
      });
