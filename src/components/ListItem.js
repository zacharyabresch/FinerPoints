import React from "react";
import { View, Text, Image } from "react-native";
import { AllHtmlEntities as Entities } from "html-entities";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "../styles/ListItem";

const entities = new Entities();

const ListItem = props => (
	<View style={styles.listItem}>
		<View style={styles.correctIcon}>
			<Icon
				name={props.item.correct ? "plus" : "minus"}
				size={18}
				color={props.item.correct ? "green" : "red"}
			/>
		</View>
		<View style={styles.question}>
			<Text>{entities.decode(props.item.question.question)}</Text>
		</View>
	</View>
);

export default ListItem;
