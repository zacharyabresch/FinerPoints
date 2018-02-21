import { StyleSheet, Dimensions } from "react-native";
import VARS from "./variables";

const styles = StyleSheet.create({
	listItem: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 6
	},
	correctIcon: {
		flex: 1 / 8,
		alignItems: "center"
	},
	question: { flex: 1 }
});

export default styles;
