import "../../setupTests";
import "react-native";
import React from "react";
import { shallow } from "enzyme";
import ListItem from "./";

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

	describe("when `correct` is true", () => {
		it("should have a `plus` Icon", () => {
			expect(listItem.find('[name="plus"]').length).toEqual(1);
		});
		it("should have a `green` color", () => {
			expect(listItem.find('[color="green"]').length).toEqual(1);
		});
	});
	describe("when `correct` is false", () => {
		beforeEach(
			() =>
				(listItem = shallow(
					<ListItem item={{ correct: false, question: "Test question" }} />
				))
		);
		it("should have a `minus` Icon", () => {
			expect(listItem.find('[name="minus"]').length).toEqual(1);
		});
		it("should have a `red` color", () => {
			expect(listItem.find('[color="red"]').length).toEqual(1);
		});
	});
});
