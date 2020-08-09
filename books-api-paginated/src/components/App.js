import React, { useState, useEffect } from "react";
import RenderedCard from "./RenderedCard";
import Pagination from "./Pagination";
import getBooks from "../getBooks";
import "../styles/App.css";

function App (){
    const [books, setBooks] = useState();

    useEffect(() => {
      search();
    });

    const search = async () => {
        const results = await getBooks();
        setBooks(results.books);
    }

    const renderBooks = () => {
      if(books) {
        return books.map((book) => <RenderedCard Book={book} />)
      }
    }

    return (
        <div className="App">
            <header className="App-header">
                {renderBooks()}
                <Pagination />
            </header>
        </div>
    );
}

export default App;
