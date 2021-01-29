import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import InsuranceDescription from "./InsuranceDescription";

describe("<InsuranceDescription />", () => {
  test("it renders without issue", () => {
    const component = shallow(<InsuranceDescription />);
    expect(toJSON(component)).toMatchSnapshot();
  });

  test("it renders correctly with name and description props passed in", () => {
    const name = "Fidelity";
    const description = "This is a great insurance for your banking";
    const component = shallow(
      <InsuranceDescription name={name} description={description} />
    );
    expect(toJSON(component)).toMatchSnapshot();
  });
});
