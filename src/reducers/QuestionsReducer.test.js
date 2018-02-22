import reducer, { mapKeys } from "./QuestionsReducer";
import * as types from "../actions/types";

const sampleData = [
	{ category: "Entertainment: Video Games" },
	{ category: "Stuff and things" }
];

const mappedData = {
	0: { id: 0, category: "Entertainment: Video Games" },
	1: { id: 1, category: "Stuff and things" }
};

describe("QuestionsReducer", () => {
	it("should return the initial state", () => {
		expect(reducer(undefined, {})).toEqual({});
	});

	it("should handle QUESTIONS_AVAILABLE", () => {
		const expected = {
			type: types.QUESTIONS_AVAILABLE,
			payload: sampleData
		};
		expect(reducer({}, expected)).toEqual(mappedData);
	});
	it("should handle RESTART_QUIZ", () => {
		const expected = { type: types.RESTART_QUIZ };
		expect(reducer({}, expected)).toEqual({});
	});
	describe("#mapKeys", () => {
		it("should map an array to an object", () => {
			const given = [{ thing: "stuff" }, { other: "things" }];
			const expected = {
				0: { id: 0, thing: "stuff" },
				1: { id: 1, other: "things" }
			};

			expect(expected).toEqual(mapKeys(given));
		});
	});
});
