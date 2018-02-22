import "../../setupTests";
import "react-native";
import React from "react";
import { shallow } from "enzyme";
import QuestionCard from "./QuestionCard";

let questionCard;

describe("QuestionCard", () => {
	beforeEach(
		() =>
			(questionCard = shallow(
				<QuestionCard
					question={{
						category: "Test Category",
						question: "Is it true or false?"
					}}
				/>
			))
	);
	afterEach(() => (questionCard = null));

	it("renders the `QuestionCard` component correctly", () => {
		expect(questionCard).toMatchSnapshot();
	});
});
