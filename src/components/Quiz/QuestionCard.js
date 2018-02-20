import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	ActivityIndicator,
	TouchableOpacity
} from "react-native";
import { AllHtmlEntities as Entities } from "html-entities";

const entities = new Entities();

const QuestionCard = ({ question, onAnswer, answerCount, questionCount }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.category}>{entities.decode(question.category)}</Text>
			<Text style={styles.question}>{entities.decode(question.question)}</Text>
			<Text style={styles.tally}>
				{answerCount + 1} / of {questionCount}
			</Text>
			<View style={{ flex: 1, flexDirection: "row" }}>
				<TouchableOpacity style={styles.btn}>
					<Button
						title="True"
						onPress={() => {
							onAnswer(question.id, true);
						}}
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.btn}>
					<Button
						title="False"
						onPress={() => {
							onAnswer(question.id, false);
						}}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		paddingTop: 30
	},
	category: {
		flex: 1,
		textAlign: "center",
		fontSize: 18,
		fontWeight: "bold",
		backgroundColor: "#f8f8f8",
		shadowColor: "#333",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2
	},
	question: {
		flex: 1,
		padding: 15
	},
	tally: {
		flex: 1,
		textAlign: "center",
		borderWidth: 1,
		borderColor: "#eee"
	},
	btn: {
		flex: 1,
		backgroundColor: "#345"
	}
});

export default QuestionCard;
