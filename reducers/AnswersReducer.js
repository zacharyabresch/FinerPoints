import { ADD_ANSWER } from "../actions/types";

const initialState = {};

const AnswersReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ANSWER: {
			return { ...state, [action.payload.id]: action.payload };
		}
		default: {
			return state;
		}
	}
};

export default AnswersReducer;
