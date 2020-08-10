import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import RenderedCard from "./RenderedCard";
import Pagination from "./Pagination";
import getBooks from "../getBooks";
import { defaultPageNumber } from "../constants";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom"

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
        return (
            <>
                {books.map((book) => (
                <Col>
                    <RenderedCard Book={book} />
                </Col>
                ))}
            </ >
        );
      }
    }

    return (
        <div className="App">
            <Navbar bg="primary">
                <Navbar.Brand>Books Api Webapp by Patrick Harris</Navbar.Brand>
            </Navbar>
            <Container>
                <Row>
                    <Col>
                        <SearchBar onSearchSubmit={onSearchSubmit} />
                    </Col>
                </Row>
                <Row>{renderBooks()}</Row>
                <Row>
                    <Col
                        style={{
                            display: "flex",
                            "justify-content": "center",
                            "align-items": "center",
                        }}
                    >
                        <Pagination page={page} onPageNumberChange={search} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
