import { StyleSheet, Dimensions } from "react-native";
import VARS from "./variables";

const styles = StyleSheet.create({
	content: {
		flex: 1,
		padding: VARS.padding
	},
	headerText: {
		fontSize: 24,
		fontWeight: "bold"
	},
	questionView: {
		flex: 1,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: VARS.borderColor,
		margin: 12,
		padding: 12,
		justifyContent: "center",
		alignItems: "center"
	},
	questionText: {
		fontSize: 24
	},
	tallyView: {
		height: 30,
		alignItems: "center",
		justifyContent: "center"
	},
	tallyText: {
		fontWeight: "bold"
	},
	footer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	}
});

export default styles;
