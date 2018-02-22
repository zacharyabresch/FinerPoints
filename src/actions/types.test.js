import "../setupTests";
import * as Actions from "./types";

describe("ActionTypes", () => {
	it("contains exactly 3 action types", () => {
		expect(Object.keys(Actions).length).toEqual(3);
	});
	it("`QUESTIONS_AVAILABLE` equals 'QUESTIONS_AVAILABLE'", () => {
		expect(Actions.QUESTIONS_AVAILABLE).toEqual("QUESTIONS_AVAILABLE");
	});
	it("`ADD_ANSWER` equals 'ADD_ANSWER'", () => {
		expect(Actions.ADD_ANSWER).toEqual("ADD_ANSWER");
	});
	it("`RESTART_QUIZ` equals 'RESTART_QUIZ'", () => {
		expect(Actions.RESTART_QUIZ).toEqual("RESTART_QUIZ");
	});
});
