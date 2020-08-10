import React from "react";
import { shallow } from "enzyme";
import RenderedCard from "../components/RenderedCard";
import mockData from "./mockData";

let wrapper;

describe("RenderedCard tests", () => {
    beforeEach(() => {
        wrapper = shallow(<RenderedCard Book={mockData.books[0]}/>);
    });

    it("includes a title, a subtitle, and some information", () => {
        expect(wrapper.find(".book__title").exists()).toBe(true);
        expect(wrapper.find(".book__subtitle").exists()).toBe(true);
        expect(wrapper.find(".book__information").exists()).toBe(true);
    });
});
