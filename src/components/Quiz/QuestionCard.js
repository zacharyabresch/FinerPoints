import React from "react";
import {
	Text,
	View,
	Button,
	ActivityIndicator,
	TouchableOpacity
} from "react-native";
import { AllHtmlEntities as Entities } from "html-entities";

import TButton from "../TButton";
import styles from "../../styles";
import qcStyles from "../../styles/QuestionCard";

const entities = new Entities();

const QuestionCard = ({ question, onAnswer, answerCount, questionCount }) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={qcStyles.headerText}>
					{entities.decode(question.category)}
				</Text>
			</View>
			<View style={qcStyles.content}>
				<View style={qcStyles.questionView}>
					<Text style={qcStyles.questionText}>
						{entities.decode(question.question)}
					</Text>
				</View>
				<View style={qcStyles.tallyView}>
					<Text style={qcStyles.tallyText}>
						{answerCount + 1} / of {questionCount}
					</Text>
				</View>
			</View>
			<View style={qcStyles.footer}>
				<TButton
					title="True"
					onPress={() => {
						onAnswer(question.id, true);
					}}
				/>
				<TButton
					title="False"
					onPress={() => {
						onAnswer(question.id, false);
					}}
				/>
			</View>
		</View>
	);
};

export default QuestionCard;
