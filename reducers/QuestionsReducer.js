import { QUESTIONS_AVAILABLE } from "../actions/types";

let initialState = {};

const mapKeys = arr => {
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
		default:
			return state;
	}
};

export default QuestionsReducer;
