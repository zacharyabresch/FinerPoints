import React from "react";
import { View, StyleSheet } from "react-native";

import VARS from "../styles/variables";

const ListItemSeparator = () => (
	<View
		style={{
			borderBottomWidth: StyleSheet.hairlineWidth,
			borderBottomColor: VARS.borderColor
		}}
	/>
);

export default ListItemSeparator;
