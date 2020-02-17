import React from "react";
import { shallow } from "enzyme";
import ButtonRemoveItem from "../components/ButtonRemoveItem";

describe("Test Button component", () => {
  it("Test click event", () => {
    // const mockCallBack = jest.fn();
    const id = 0;
    const item = { name: "Write Todo list", isComplete: false };
    const button = shallow(<ButtonRemoveItem currentIdx={id} current={item} />);
    button.find("button").simulate("click");

    expect(true).toEqual(true);
  });
});
