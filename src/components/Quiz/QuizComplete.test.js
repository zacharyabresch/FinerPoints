import "../../setupTests";
import "react-native";
import React from "react";
import { shallow } from "enzyme";
import QuizComplete from "./QuizComplete";

let quizComplete;

describe("QuizComplete", () => {
	beforeEach(
		() =>
			(quizComplete = shallow(
				<QuizComplete
					questions={{ 0: { id: 0 }, 1: { id: 1 } }}
					answers={{ 0: { id: 0 }, 1: { id: 1 } }}
				/>
			))
	);
	afterEach(() => (quizComplete = null));

	it("renders the `QuizComplete` component correctly", () => {
		expect(quizComplete).toMatchSnapshot();
	});
});
