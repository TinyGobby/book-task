import React from "react";
import { shallow } from "enzyme";
import Pagination from "../components/Pagination";

let wrapper;
const startingPageNumber = 2;
const onPageNumberChange = jest.fn();

describe("Pagination tests", () => {
    beforeEach(() => {
        wrapper = shallow(
            <Pagination page={startingPageNumber} onPageNumberChange={onPageNumberChange} />
        );
    });

    it("calls onPageNumberChange with page+1 if Next is clicked", () => {
        wrapper.find(".pagination__next").simulate("click");

        expect(onPageNumberChange).toHaveBeenCalledWith(startingPageNumber + 1);
    });

    it("calls onPageNumberChange with page-1 if Prev is clicked", () => {
        wrapper.find(".pagination__prev").simulate("click");

        expect(onPageNumberChange).toHaveBeenCalledWith(startingPageNumber - 1);
    });
});
