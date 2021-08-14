import React from "react";
import renderer from "react-test-renderer";
import Header from "..";

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header siteTitle="Default Starter" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
