import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import Quiz from "./";

xit("renders correctly", () => {
	const tree = renderer.create(<Quiz />);
});
