import reducer from "./AnswersReducer";
import * as types from "../actions/types";

describe("AnswersReducer", () => {
	it("should return the initial state", () => {
		expect(reducer(undefined, {})).toEqual({});
	});

	it("should handle ADD_ANSWER", () => {
		const expected = {
			type: types.ADD_ANSWER,
			payload: { id: 0, response: true }
		};
		expect(reducer({}, expected)).toEqual({ 0: { id: 0, response: true } });
	});
	it("should handle RESTART_QUIZ", () => {
		const expected = {
			type: types.RESTART_QUIZ
		};

		expect(reducer({}, expected)).toEqual({});
	});
});
