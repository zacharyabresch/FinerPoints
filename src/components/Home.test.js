import "../setupTests";
import "react-native";
import React from "react";
import Home from "./Home";

import { shallow } from "enzyme";

let home;
describe("Home", () => {
	beforeEach(() => (home = shallow(<Home />)));
	afterEach(() => (home = null));

	it("renders correctly", () => {
		expect(home).toMatchSnapshot();
	});

	it("initializes the `state`", () => {
		const expected = { quizBegun: false };
		const actual = home.state();
		expect(expected).toEqual(actual);
	});

	it("sets `quizBegun` to true when `Begin Quiz` button is clicked", () => {
		home.find("TButton").simulate("press");
		expect(home.state().quizBegun).toEqual(true);
	});
});
