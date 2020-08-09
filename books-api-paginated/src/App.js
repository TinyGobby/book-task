import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import RenderedCard from "./RenderedCard";
import getBooks from "./getBooks";
import "./styles/App.css";

const App = () => {
    const [books, setBooks] = useState();

    const search = async () => {
        const results = await getBooks();
        setBooks(results.books);
    }

    const renderBooks = () => {
      if(books) {
        return (<RenderedCard Book={books[0]}/>);
      }
    }

    return (
        <div className="App">
            <header className="App-header">
                <Button onClick={search}>Button</Button>
                {renderBooks()}
            </header>
        </div>
    );
}

export default App;
