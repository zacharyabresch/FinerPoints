import "react-native";
import React from "react";
import Home from "./Home";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

let home;
describe("Home", () => {
	beforeEach(() => (home = renderer.create(<Home />)));
	afterEach(() => (home = null));

	it("renders correctly", () => {
		expect(home).toMatchSnapshot();
	});

	it("initializes the `state`", () => {
		const expected = {
			quizBegun: false
		};
		expect(home.getInstance().state).toEqual(expected);
	});

	describe("when `quizBegun` is false", () => {
		it("renders the correct header text");
		it("renders the correct content text");
		it("renders the `Begin Quiz` button");
	});
});
