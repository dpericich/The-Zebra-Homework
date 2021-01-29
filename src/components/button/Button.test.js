import React, { Component } from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Button from "./Button";
import { getByText } from "@testing-library/react";

describe("<Button />", () => {
  test("it renders without issue", () => {
    const component = shallow(<Button />);
    expect(toJSON(component)).toMatchSnapshot();
  });
  test("it renders correctly with type of 1", () => {
    const type = 1;
    const component = shallow(<Button type={type} />);
    expect(toJSON(component)).toMatchSnapshot();
  });
  test("it renders correctly with type of 2", () => {
    const type = 2;
    const component = shallow(<Button type={type} />);
    expect(toJSON(component)).toMatchSnapshot();
  });
  test("it renders correctly with type 3", () => {
    const type = 3;
    const component = shallow(<Button type={type} />);
    expect(toJSON(component)).toMatchSnapshot();
  });
});
