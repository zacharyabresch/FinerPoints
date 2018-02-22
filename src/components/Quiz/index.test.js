import "../../setupTests";
import "react-native";
import React from "react";
import { shallow } from "enzyme";
import Quiz from "./";

let quiz;

describe("Quiz", () => {
	beforeEach(() => (quiz = shallow(<Quiz />)));
	afterEach(() => (quiz = null));

	xit("renders the `Quiz` component correctly", () => {
		expect(quiz).toMatchSnapshot();
	});
});
