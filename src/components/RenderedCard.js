import React from "react";
import Card from "react-bootstrap/Card";

const RenderedCard = ({ Book }) => {
    return (
        <Card border="primary" style={{ "text-align": "left", padding: "8px", height: "100%" }}>
            <Card.Title className="book__title">{Book.book_title}</Card.Title>
            <Card.Subtitle className="book__subtitle">{Book.book_author.join(", ")}</Card.Subtitle>
            <br />
            <Card.Text className="book__information">
                <Card.Text className="book__information--publicationYear">
                    Publication Year: {Book.book_publication_year}
                </Card.Text>
                <Card.Text className="book__information--country">
                    Country: {Book.book_publication_country}
                </Card.Text>
                <Card.Text className="book__information--city">
                    City: {Book.book_publication_city}
                </Card.Text>
                <Card.Text className="book__information--pages">Pages: {Book.book_pages}</Card.Text>
                <Card.Text className="book__information--id">ID: {Book.id}</Card.Text>
            </Card.Text>
        </Card>
    );
}

export default RenderedCard;