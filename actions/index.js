import axios from "axios";

import * as types from "./types.js";

const QUESTION_API_URL =
	"https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

export const fetchQuestions = () => {
	const request = axios.get(QUESTION_API_URL);

	return dispatch => {
		request.then(response => {
			dispatch({
				type: types.QUESTIONS_AVAILABLE,
				payload: response.data.results
			});
		});
	};
};

export function addAnswer(id, response) {
	const payload = { id, response };
	return {
		type: types.ADD_ANSWER,
		payload
	};
}
