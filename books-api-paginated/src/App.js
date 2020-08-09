import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import getBooks from "./getBooks";
import "./styles/App.css";

function App() {
    const [books, setBooks] = useState();

    async function search() {
        const results = await getBooks();
        setBooks(results.books);
    }

    return (
        <div className="App">
            <header className="App-header">
                <Button onClick={search}>Button</Button>
                {books ? (
                    <Card>
                        <Card.Body>{books[0].book_title}</Card.Body>
                    </Card>
                ) : (
                    <></>
                )}
            </header>
        </div>
    );
}

export default App;
