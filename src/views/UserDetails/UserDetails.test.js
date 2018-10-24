import React from "react";
import { shallow } from "enzyme";
import UserDetails from "./UserDetails";

describe("User details view", () => {
  const context = {};
  beforeAll(() => {
    const userQuery = shallow(
      <UserDetails location={{ pathname: "/users/1" }} />
    )
      .find("Query")
      .at(0)
      .prop("children");
    context.userDetails = shallow(
      <div>{userQuery({}, { loading: false })}</div>
    );
  });
  it("should render a form with 6 fields", () => {
    const { userDetails } = context;
    expect(userDetails.find("FormField")).toHaveLength(6);
    userDetails.unmount();
  });

  it("should render a table with posts made by some user", () => {
    const { userDetails } = context;
    const postQuery = userDetails.find("Query").prop("children");
    const posts = shallow(<div>{postQuery({}, { loading: false })}</div>);
    expect(posts.find("DataTable")).toHaveLength(1);
    posts.unmount();
  });
});
