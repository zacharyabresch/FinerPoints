import React, { Component } from "react";
import { Text, View } from "react-native";

import Quiz from "../Quiz";
import TButton from "../TButton";

import styles from "../../styles";
import homeStyles from "../../styles/Home";

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quizBegun: false
		};
	}

	beginQuiz() {
		this.setState({ quizBegun: true });
	}

	render() {
		if (this.state.quizBegun) {
			return <Quiz />;
		}
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={homeStyles.welcomeText}>
						Welcome to the Trivia Challenge!
					</Text>
				</View>
				<View style={homeStyles.content}>
					<Text style={homeStyles.contentText}>
						You will be presented with 10 True or False questions.
					</Text>
					<Text style={homeStyles.contentText}>Can you score 100%?</Text>
				</View>
				<View style={styles.footer}>
					<TButton title="Begin Quiz" onPress={this.beginQuiz.bind(this)} />
				</View>
			</View>
		);
	}
}
