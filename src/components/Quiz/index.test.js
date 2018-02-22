import "../../setupTests";
import "react-native";
import { ActivityIndicator } from "react-native";
import React from "react";
import { shallow } from "enzyme";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import Quiz from "./";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = { questions: {}, answers: {} };

let quiz;

describe("Quiz", () => {
	beforeEach(
		() =>
			(quiz = shallow(<Quiz />, {
				context: { store: mockStore(initialState) }
			}))
	);
	afterEach(() => (quiz = null));

	it("renders the `Quiz` component correctly", () => {
		expect(quiz).toMatchSnapshot();
	});

	it("renders the activity indicator when loading");
	it("renders a question card with the first question");
	it("renders `QuizComplete` if all questions have been answered");
});
