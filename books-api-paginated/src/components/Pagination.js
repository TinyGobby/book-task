import React from "react";

const Pagination = ({ page, onPageNumberChange }) => {
    const onSelect = (item) => {
        if (item === "Prev" && page === 1) {
            return;
        }

        item === "Prev"
            ? onPageNumberChange({ pageNumber: Number(page) - 1 })
            : onPageNumberChange({ pageNumber: Number(page) + 1 });
    };

    return (
        <ul className={"pagination"}>
            <button className={"pagination__prev"} onClick={() => onSelect("Prev")}>Prev</button>
            <button className={"pagination__next"} onClick={() => onSelect("Next")}>Next</button>
        </ul>
    );
};

export default Pagination;