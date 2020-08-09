import React from "react";
import { itemsPerPage } from "constants";

const Pagination = ({ page, totalItems, onPageNumberChange }) => {
    const onSelect = (item) => {
        item === "Prev" ? onPageNumberChange(page-1) : onPageNumberChange(page+1);
    };

    return (
        <ul className={"pagination"}>
            <span className={"pagination__prev"} onClick={() => onSelect("Prev")}>Prev</span>
            <span className={"pagination__next"} onClick={() => onSelect("Next")}>Next</span>
        </ul>
    );
};

export default Pagination;