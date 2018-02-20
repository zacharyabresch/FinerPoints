import { combineReducers } from "redux";

import questions from "./QuestionsReducer";
import answers from "./AnswersReducer";

export default combineReducers({ questions, answers });
