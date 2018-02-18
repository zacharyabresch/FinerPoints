import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	ActivityIndicator
} from "react-native";

const QuestionCard = ({ question, onAnswer, answerCount, questionCount }) => {
	return (
		<View>
			<Text>{question.category}</Text>
			<Text>{question.question}</Text>
			<Text>
				{answerCount + 1} / of {questionCount}
			</Text>
			<Button
				title="True"
				onPress={() => {
					onAnswer(question.id, true);
				}}
			/>
			<Button
				title="False"
				onPress={() => {
					onAnswer(question.id, false);
				}}
			/>
		</View>
	);
};

export default QuestionCard;
