import React from "react";
import {
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
		<View>
			<Text>{entities.decode(question.category)}</Text>
			<View>
				<Text>{entities.decode(question.question)}</Text>
			</View>
			<View>
				<Text>
					{answerCount + 1} / of {questionCount}
				</Text>
			</View>
			<View>
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

export default QuestionCard;
