import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "../../styles";

const TButton = props => (
	<TouchableOpacity style={styles.touchable} onPress={props.onPress}>
		<Text style={styles.touchableText}>{props.title}</Text>
	</TouchableOpacity>
);

export default TButton;
