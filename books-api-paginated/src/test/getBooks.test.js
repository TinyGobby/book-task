import axios from "axios";
import getSearchResults from "../getSearchResults";

const mockData = {
    books: [
        {
            id: 1,
            book_author: ["Test Author"],
            book_title: "Book Title 1",
            book_publication_year: 2020,
            book_publication_country: "United Kingdom",
            book_publication_city: "London",
            book_pages: 104,
        },
        {
            id: 2,
            book_author: ["Author 2"],
            book_title: "Book Title 2",
            book_publication_year: 1900,
            book_publication_country: "France",
            book_publication_city: "Paris",
            book_pages: 259,
        },
    ],
    count: 2000,
};

it("should return expected data", async () => {
    axios.post = jest.fn()
    axios.post.mockImplementationOnce(() => Promise.resolve({ data: mockData }));

    const result = await getSearchResults();

    expect(result).toEqual(mockData);
});
