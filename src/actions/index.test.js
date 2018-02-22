import axios from "axios";
import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./";
import * as types from "./types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Action creators", () => {
	beforeEach(() => moxios.install());
	afterEach(() => moxios.uninstall());

	it("should create an action to `fetchQuestions`", done => {
		const store = mockStore({});
		const sampleData = [
			{
				category: "Entertainment: Video Games",
				type: "boolean",
				difficulty: "hard",
				question: "Unturned originally started as a Roblox game.",
				correct_answer: "True",
				incorrect_answers: ["False"]
			},
			{
				category: "Stuff and things",
				type: "boolean",
				difficulty: "hard",
				question: "Sometimes, you find stuff & things.",
				correct_answer: "False",
				incorrect_answers: ["True"]
			}
		];

		moxios.stubRequest(actions.QUESTION_API_URL, {
			status: 200,
			response: sampleData
		});

		const expectedAction = {
			type: types.QUESTIONS_RECEIVED,
			payload: sampleData
		};

		const unsubscribe = store.subscribe(() => {
			expected(actions.fetchQuestions()).toEqual(expectedAction);
		});

		actions.fetchQuestions()(store.dispatch);
		done();
	});

	it("should create an action to `addAnswer`", () => {
		const action = { id: 0, response: true };
		const expected = {
			type: types.ADD_ANSWER,
			payload: action
		};

		expect(expected).toEqual(actions.addAnswer(action.id, action.response));
	});

	it("should create an action to `restartQuiz`", () => {
		const expected = {
			type: types.RESTART_QUIZ
		};

		expect(expected).toEqual(actions.restartQuiz());
	});
});
