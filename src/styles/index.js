import { StyleSheet, Dimensions } from "react-native";
import VARS from "./variables";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		width,
		height
	},
	header: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: VARS.headerBackgroundColor,
		height: VARS.headerHeight,
		padding: VARS.padding,
		paddingTop: 20,
		borderBottomWidth: VARS.borderWidth,
		borderBottomColor: VARS.borderColor
	},
	content: {
		flex: 1,
		padding: VARS.padding
	},
	footer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	touchable: {
		backgroundColor: "#33F",
		padding: 12,
		paddingLeft: 24,
		paddingRight: 24,
		borderRadius: 5,
		flex: 1,
		alignItems: "center",
		margin: 12
	},
	touchableText: {
		color: "#EEE",
		fontSize: 16,
		fontWeight: "bold"
	}
});

export default styles;
