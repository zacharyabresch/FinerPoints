import { StyleSheet, Dimensions } from "react-native";
import VARS from "./variables";

const styles = StyleSheet.create({
	content: {
		justifyContent: "center",
		flex: 1,
		padding: VARS.padding + 10
	},
	welcomeText: {
		fontSize: 24,
		fontWeight: "bold"
	},
	contentText: {
		fontSize: 20,
		textAlign: "center"
	}
});

export default styles;
