import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import RenderedCard from "./RenderedCard";
import Pagination from "./Pagination";
import getBooks from "../getBooks";
import { defaultPageNumber } from "../constants";
import { useHistory } from "react-router-dom"
import "../styles/App.css";

const getPageNumberFromUrl = () => {
    const kvp = document.location.search.substr(1).split("=");

    let initialPageNumber = kvp[0] === "p" && kvp[1] > 0 ? kvp[1] : defaultPageNumber;

    return initialPageNumber;
};

function App (){
    const history = useHistory();
    const initialPageNumber = getPageNumberFromUrl();
    const [books, setBooks] = useState();
    const [page, setPage] = useState(initialPageNumber);

    useEffect(() => {
      search({ pageNumber: page });
    }, []);

    const search = async ({ pageNumber, searchTerm }) => {
        const results = await getBooks(pageNumber, searchTerm);
        setBooks(results.books);
        setPage(pageNumber);
        history.push(`${document.location.pathname}?p=${pageNumber}`);
    };

    const onSearchSubmit = (searchTerm) => {
        search({ pageNumber: defaultPageNumber, searchTerm: searchTerm });
    };

    const renderBooks = () => {
      if(books) {
        return books.map((book) => <RenderedCard Book={book} />)
      }
    }

    return (
        <div className="App">
            <SearchBar onSearchSubmit={onSearchSubmit} />
            {renderBooks()}
            <Pagination page={page} onPageNumberChange={search} />
        </div>
    );
}

export default App;
