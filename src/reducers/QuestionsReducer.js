import { QUESTIONS_AVAILABLE, RESTART_QUIZ } from "../actions/types";

let initialState = {};

export const mapKeys = arr => {
	const obj = {};
	arr.map((item, index) => {
		item.id = index;
		obj[index] = item;
	});
	return obj;
};

const QuestionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case QUESTIONS_AVAILABLE:
			return mapKeys(action.payload);
		case RESTART_QUIZ: {
			return initialState;
		}
		default:
			return state;
	}
};

export default QuestionsReducer;
