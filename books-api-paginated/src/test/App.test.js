import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("App tests", () => {
    it("rendered without crashing", () => {
        shallow(<App />)
    });
});
