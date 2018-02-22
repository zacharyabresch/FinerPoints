import "../setupTests";
import "react-native";
import React from "react";
import { shallow } from "enzyme";
import TButton from "./TButton";

let tButton;

describe("TButton", () => {
	beforeEach(() => (tButton = shallow(<TButton />)));
	afterEach(() => (tButton = null));

	it("renders the `TButton` component correctly", () => {
		expect(tButton).toMatchSnapshot();
	});
});
