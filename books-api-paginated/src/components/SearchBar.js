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
        <form onSubmit={handleSubmit}>
            <label>Search</label>
                <input type="text" value={searchTerm} onChange={handleChange}/>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </form>
    );
}

export default SearchBar;