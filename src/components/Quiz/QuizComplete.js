import React from "react";
import { Text, View, ActivityIndicator, FlatList } from "react-native";

import TButton from "../TButton";
import ListItem from "../ListItem";
import ListItemSeparator from "../ListItemSeparator";
import styles from "../../styles";
import qcStyles from "../../styles/QuizComplete";

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
		<View style={styles.container}>
			<View style={styles.header}>
				<Text>
					You scored {correct.length} / {listData.length}
				</Text>
			</View>
			<View style={styles.content}>
				<FlatList
					data={listData}
					renderItem={({ item }) => {
						return <ListItem item={item} />;
					}}
					ItemSeparatorComponent={ListItemSeparator}
				/>
			</View>
			<View style={styles.footer}>
				<TButton
					title="Play Again!"
					onPress={() => {
						props.restartQuiz();
					}}
				/>
			</View>
		</View>
	);
};

export default QuizComplete;
