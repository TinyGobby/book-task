import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const SearchBar = ({ onSearchSubmit }) => {
    const [searchTerm, setSearchTerm] = useState();

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearchSubmit(searchTerm);
    }

    return (
        <form onSubmit={handleSubmit} style={{ position: "relative", height: "50px" }}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                style={{
                    padding: "6px",
                    border: "1px solid #1D7874",
                    "border-radius": "4px",
                    position: "absolute",
                    top: "50%",
                    right: "75px",
                    transform: "translateY(-50%)",
                }}
                placeholder={"Search"}
            />
            <Button
                variant="outline-primary"
                type="submit"
                style={{
                    position: "absolute",
                    right: "0px",
                    top: "50%",
                    transform: "translateY(-50%)",
                }}
            >
                Submit
            </Button>
        </form>
    );
}

export default SearchBar;