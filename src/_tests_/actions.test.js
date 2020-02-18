import React from "react";
import { shallow } from "enzyme";

import {
  addItem,
  removeItem,
  editItem,
  toggleItemComplete
} from "../actions/index";

import initialState from "../initialState";

describe("Test useReducer actions", () => {

  it("Test addItem action", () => {
    expect(true).toEqual(true);
  });


  it("Test removeItem action", () => {
    const {list} = initialState;
    const changedList = removeItem(list);
    // const startList = { name: "Write Todo list", isComplete: false };

    expect(changedList.length).toEqual(list.length - 1);
  });

  it("Test editItem action", () => {
    expect(true).toEqual(true);
  });

  it("Test toggleItemComplete action", () => {
    expect(true).toEqual(true);
  });
});
