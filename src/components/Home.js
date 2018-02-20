import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TouchableOpacity,
	Dimensions
} from "react-native";

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
				<Text style={styles.header}>Welcome to the Trivia Challenge!</Text>
				<View style={styles.instructions}>
					<Text style={styles.instructionText}>
						You will be presented with 10 True or False questions.
					</Text>
					<Text style={styles.instructionText}>Can you score 100%?</Text>
				</View>
				<View style={styles.touchContainer}>
					<TouchableOpacity style={styles.touchable}>
						<Button title="Begin Quiz" onPress={this.beginQuiz.bind(this)} />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

let { width, height } = Dimensions.get("window");
let halfWidth = width / 2;

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
	instructions: {
		flex: 3 / 3,
		justifyContent: "center"
	},
	instructionText: {
		fontSize: 18,
		padding: 12,
		textAlign: "center"
	},
	touchContainer: {
		justifyContent: "center",
		alignItems: "center"
	},
	touchable: {
		height: 60,
		marginBottom: 20,
		backgroundColor: "#EEF",
		width: halfWidth,
		justifyContent: "center",
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: "#333"
	}
});
