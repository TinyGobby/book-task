import React from "react";
import { shallow } from "enzyme";
import App from "../components/App";

describe("App tests", () => {
    it("rendered without crashing", () => {
        shallow(<App />)
    });
});
