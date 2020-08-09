import axios from "axios";
import mockData from "./mockData";
import getSearchResults from "../getBooks";

it("should return expected data", async () => {
    axios.post = jest.fn()
    axios.post.mockImplementationOnce(() => Promise.resolve({ data: mockData }));

    const result = await getSearchResults();

    expect(result).toEqual(mockData);
});
