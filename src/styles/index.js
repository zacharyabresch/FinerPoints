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
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: VARS.footerBackgroundColor,
		height: VARS.footerHeight,
		padding: VARS.padding,
		borderTopWidth: VARS.borderWidth,
		borderTopColor: VARS.borderColor
	}
});

export default styles;
