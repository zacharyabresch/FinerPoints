import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Quiz from "./Quiz";

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
				<Text style={styles.welcome}>Welcome to the Trivia Challenge!</Text>
				<Text style={styles.instructions}>
					You will be presented with 10 True or False questions.
				</Text>
				<Text style={styles.instructions}>Can you score 100%?</Text>
				<Button title="Begin Quiz" onPress={this.beginQuiz.bind(this)} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF"
	},
	welcome: {
		flex: 1,
		fontSize: 30,
		textAlign: "center",
		margin: 10,
		paddingTop: 30
	},
	instructions: {
		flex: 1,
		textAlign: "center",
		color: "#333333",
		marginBottom: 5
	}
});
