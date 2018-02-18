import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
	StyleSheet,
	Text,
	View,
	Button,
	ActivityIndicator
} from "react-native";

import * as Actions from "../../actions";

class Quiz extends Component {
	componentDidMount() {
		this.props.fetchQuestions();
	}

	render() {
		if (Object.keys(this.props.questions).length === 0) {
			return (
				<View>
					<ActivityIndicator
						animating={true}
						style={[{ height: 80 }]}
						size="small"
					/>
				</View>
			);
		} else {
			return (
				<View>
					<Text>Quiz</Text>
					<Text>{Object.keys(this.props.questions).length}</Text>
				</View>
			);
		}
	}
}

function mapStateToProps({ questions }) {
	return { questions };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
