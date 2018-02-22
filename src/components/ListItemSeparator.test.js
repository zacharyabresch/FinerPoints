import "../setupTests";
import "react-native";
import React from "react";
import { shallow } from "enzyme";
import ListItemSeparator from "./ListItemSeparator";

let listItemSeparator;

describe("ListItemSeparator", () => {
	beforeEach(() => (listItemSeparator = shallow(<ListItemSeparator />)));
	afterEach(() => (listItemSeparator = null));

	it("renders the `ListItemSeparator` component correctly", () => {
		expect(listItemSeparator).toMatchSnapshot();
	});
});
