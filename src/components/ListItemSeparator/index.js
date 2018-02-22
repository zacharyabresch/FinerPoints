import React from "react";
import { View, StyleSheet } from "react-native";

import VARS from "../../styles/variables";

const ListItemSeparator = () => (
	<View
		style={{
			borderWidth: StyleSheet.hairlineWidth,
			borderColor: VARS.borderColor
		}}
	/>
);

export default ListItemSeparator;
