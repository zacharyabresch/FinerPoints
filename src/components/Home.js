import React, { Component } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";

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
			<View>
				<Text>Welcome to the Trivia Challenge!</Text>
				<View>
					<Text>You will be presented with 10 True or False questions.</Text>
					<Text>Can you score 100%?</Text>
				</View>
				<View>
					<TouchableOpacity>
						<Button title="Begin Quiz" onPress={this.beginQuiz.bind(this)} />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
