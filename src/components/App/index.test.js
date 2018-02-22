import "../../setupTests";
import "react-native";
import React from "react";
import { shallow } from "enzyme";
import App from "./";

let app;

describe("App", () => {
	beforeEach(() => (app = shallow(<App />)));
	afterEach(() => (app = null));

	it("renders the `App` component correctly", () => {
		expect(app).toMatchSnapshot();
	});
});
