import React from "react";
import Button from "react-bootstrap/Button";

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
        <ul className={"pagination"} style={{ display: "block" }}>
            <Button
                className={"pagination__prev"}
                onClick={() => onSelect("Prev")}
                variant="outline-primary"
                style={{ margin: "3px" }}
            >
                Prev
            </Button>
            <Button
                className={"pagination__next"}
                onClick={() => onSelect("Next")}
                variant="outline-primary"
                style={{ margin: "3px" }}
            >
                Next
            </Button>
        </ul>
    );
};

export default Pagination;