import {
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  TOGGLE_ITEM_COMPLETE
} from "../actions/constants";

import reducer from "../reducers/index";

import initialState from "../initialState";

describe("INITIAL STATE", () => {
  it("loads correctly", () => {
    const action = {
      type: "DUMMY_ACTION",
      payload: "Dummy action"
    };
    expect(reducer(undefined, action)).toEqual(initialState);
  });
});

describe(ADD_ITEM, () => {
  it("payload output is correct", () => {
    const { list } = initialState;
    const action = {
      type: ADD_ITEM,
      payload: {
        list
      }
    };
    expect(reducer(undefined, action)).toMatchSnapshot();
  });
});

describe(REMOVE_ITEM, () => {
  it("payload output is correct", () => {
    const { list } = initialState;
    const action = {
      type: REMOVE_ITEM,
      payload: {
        list
      }
    };
    expect(reducer(undefined, action)).toMatchSnapshot();
  });
});

describe(EDIT_ITEM, () => {
  it("payload output is correct", () => {
    const { list } = initialState;
    const action = {
      type: EDIT_ITEM,
      payload: {
        list
      }
    };
    expect(reducer(undefined, action)).toMatchSnapshot();
  });
});

describe(TOGGLE_ITEM_COMPLETE, () => {
  it("payload output is correct", () => {
    const { list } = initialState;
    const action = {
      type: TOGGLE_ITEM_COMPLETE,
      payload: {
        list
      }
    };
    expect(reducer(undefined, action)).toMatchSnapshot();
  });
});
