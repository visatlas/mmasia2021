import React from "react";
import renderer from "react-test-renderer";
import { NavLink, MobileNavLink } from "../header-links";

describe("Nav Link", () => {
  it("renders correctly", () => {
    const link = renderer
      .create(<NavLink to="/" />)
      .toJSON();
    expect(link).toMatchSnapshot();
    const selected = renderer
      .create(<NavLink to="/" selected />)
      .toJSON();
    expect(selected).toMatchSnapshot();
    const disabled = renderer
      .create(<NavLink to="/" disabled />)
      .toJSON();
    expect(disabled).toMatchSnapshot();
  });
});

describe("Mobile Nav Link", () => {
  it("renders correctly", () => {
    const link = renderer
      .create(<MobileNavLink to="/" />)
      .toJSON();
    expect(link).toMatchSnapshot();
    const selected = renderer
      .create(<MobileNavLink to="/" selected />)
      .toJSON();
    expect(selected).toMatchSnapshot();
    const disabled = renderer
      .create(<MobileNavLink to="/" disabled />)
      .toJSON();
    expect(disabled).toMatchSnapshot();
    const nested = renderer
      .create(<MobileNavLink to="/" nested />)
      .toJSON();
    expect(nested).toMatchSnapshot();
  });
});
