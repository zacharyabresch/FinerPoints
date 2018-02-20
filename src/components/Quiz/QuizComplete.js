import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	ActivityIndicator,
	FlatList
} from "react-native";

const strToBool = str => {
	const lookup = {
		True: true,
		False: false
	};
	return lookup[str];
};

const QuizComplete = props => {
	const listData = Object.entries(props.questions).map(
		([questionKey, question]) => {
			const response = props.answers[questionKey].response;
			const correct = response === strToBool(question.correct_answer);
			const scoreObj = {
				key: questionKey,
				question: question,
				response,
				correct
			};
			return scoreObj;
		}
	);

	const correct = listData.filter(data => {
		if (data.correct) {
			return data;
		}
	});

	console.log(correct);

	return (
		<View>
			<Text>
				You scored {correct.length} / {listData.length}
			</Text>
			<FlatList
				data={listData}
				renderItem={({ item }) => {
					return <Text>{String(item.correct)}</Text>;
				}}
			/>
			<Button
				title="Play Again!"
				onPress={() => {
					props.restartQuiz();
				}}
			/>
		</View>
	);
};

export default QuizComplete;
