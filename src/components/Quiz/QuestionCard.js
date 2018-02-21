import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	ActivityIndicator,
	TouchableOpacity,
	Dimensions
} from "react-native";
import { AllHtmlEntities as Entities } from "html-entities";

const entities = new Entities();

const QuestionCard = ({ question, onAnswer, answerCount, questionCount }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>{entities.decode(question.category)}</Text>
			<View style={styles.questionContainer}>
				<Text>{entities.decode(question.question)}</Text>
			</View>
			<View style={styles.tallyContainer}>
				<Text>
					{answerCount + 1} / of {questionCount}
				</Text>
			</View>
			<View style={styles.buttonGroup}>
				<TouchableOpacity>
					<Button
						title="True"
						onPress={() => {
							onAnswer(question.id, true);
						}}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
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

let { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width,
		height
	},
	header: {
		paddingTop: 32,
		height: 64,
		fontSize: 20,
		backgroundColor: "#F4F4F4",
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: "#ddd",
		paddingHorizontal: 12,
		textAlign: "center"
	},
	questionContainer: {},
	tallyContainer: {},
	buttonGroup: {
		flexDirection: "row",
		justifyContent: "center"
	}
});

export default QuestionCard;
