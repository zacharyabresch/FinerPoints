import { StyleSheet, Dimensions } from "react-native";
import VARS from "./variables";

const styles = StyleSheet.create({
	headerText: {
		fontSize: 24,
		fontWeight: "bold"
	},
	listItem: {
		textAlign: "center",
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: VARS.borderColor
	}
});

export default styles;
