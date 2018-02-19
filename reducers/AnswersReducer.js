import { ADD_ANSWER, RESTART_QUIZ } from "../actions/types";

const initialState = {};

const AnswersReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ANSWER: {
			return { ...state, [action.payload.id]: action.payload };
		}
		case RESTART_QUIZ: {
			return initialState;
		}
		default: {
			return state;
		}
	}
};

export default AnswersReducer;
