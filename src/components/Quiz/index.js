import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
	StyleSheet,
	Text,
	View,
	Button,
	ActivityIndicator
} from "react-native";

import * as Actions from "../../actions";
import QuestionCard from "./QuestionCard";
import QuizComplete from "./QuizComplete";

class Quiz extends Component {
	componentDidMount() {
		this.props.fetchQuestions();
	}

	answerQuestion(questionId, response) {
		this.props.addAnswer(questionId, response);
	}

	questionsLength() {
		return Object.keys(this.props.questions).length;
	}

	answersLength() {
		return Object.keys(this.props.answers).length;
	}

	isComplete() {
		return this.questionsLength() === this.answersLength();
	}

	restartQuiz() {
		this.props.restartQuiz();
		this.props.fetchQuestions();
	}

	render() {
		if (this.questionsLength() === 0) {
			return (
				<View>
					<ActivityIndicator
						animating={true}
						style={[{ height: 80 }]}
						size="small"
					/>
				</View>
			);
		}

		if (this.isComplete()) {
			return (
				<QuizComplete
					answers={this.props.answers}
					questions={this.props.questions}
					restartQuiz={this.restartQuiz.bind(this)}
				/>
			);
		}
		return (
			<View>
				<QuestionCard
					question={this.props.questions[this.answersLength()]}
					onAnswer={this.answerQuestion.bind(this)}
					answerCount={this.answersLength()}
					questionCount={this.questionsLength()}
				/>
			</View>
		);
	}
}

function mapStateToProps({ questions, answers }) {
	return { questions, answers };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
