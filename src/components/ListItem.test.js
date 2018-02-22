import "../setupTests";
import "react-native";
import React from "react";
import { shallow } from "enzyme";
import ListItem from "./ListItem";

let listItem;

describe("ListItem", () => {
	beforeEach(
		() =>
			(listItem = shallow(
				<ListItem item={{ correct: true, question: "Test question" }} />
			))
	);
	afterEach(() => (listItem = null));

	it("renders the `ListItem` component correctly", () => {
		expect(listItem).toMatchSnapshot();
	});
});
