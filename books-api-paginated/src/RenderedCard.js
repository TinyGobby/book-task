import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const RenderedCard = ({ Book }) => {
    return (
        <Card>
            <Card.Title className="book__title">{Book.book_title}</Card.Title>
            <Card.Subtitle className="book__subtitle">{Book.book_author}</Card.Subtitle>
            <ListGroup className="book__information">
                <ListGroup.Item className="book__information--publicationYear">
                    Publication Year: {Book.book_publication_year}
                </ListGroup.Item>
                <ListGroup.Item className="book__information--country">
                    Country: {Book.book_publication_country}
                </ListGroup.Item>
                <ListGroup.Item className="book__information--city">
                    City: {Book.book_publication_city}
                </ListGroup.Item>
                <ListGroup.Item className="book__information--pages">
                    Pages: {Book.book_pages}
                </ListGroup.Item>
                <ListGroup.Item className="book__information--id">
                    ID: {Book.id}
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default RenderedCard;