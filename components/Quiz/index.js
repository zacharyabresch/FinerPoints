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

class Quiz extends Component {
	componentDidMount() {
		this.props.fetchQuestions();
	}

	answerQuestion(questionId, response) {
		this.props.addAnswer(questionId, response);
	}

	render() {
		if (Object.keys(this.props.questions).length === 0) {
			return (
				<View>
					<ActivityIndicator
						animating={true}
						style={[{ height: 80 }]}
						size="small"
					/>
				</View>
			);
		} else {
			const currentQuestion = this.props.questions[
				Object.keys(this.props.answers).length
			];
			console.log(currentQuestion);
			return (
				<View>
					<Text>Quiz</Text>
					<QuestionCard
						question={currentQuestion}
						onAnswer={this.answerQuestion.bind(this)}
						answerCount={Object.keys(this.props.answers).length}
						questionCount={Object.keys(this.props.questions).length}
					/>
				</View>
			);
		}
	}
}

function mapStateToProps({ questions, answers }) {
	return { questions, answers };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
