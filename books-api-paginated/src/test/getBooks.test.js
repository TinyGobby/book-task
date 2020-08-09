import axios from "axios";
import mockData from "./mockData";
import getBooks from "../getBooks";
import { api, defaultPageNumber, itemsPerPage } from "../constants";

describe("getBooks api tests", () => {
    beforeEach(() => {
        axios.post = jest.fn(() => Promise.resolve({ data: mockData }));
    });

    it("should return expected data", async () => {
        const result = await getBooks();

        expect(result).toEqual(mockData);
    });

    it("should be called with api and page: 1 by default", async () => {
        await getBooks();

        expect(axios.post).toHaveBeenCalledWith(api, {
            page: defaultPageNumber,
            itemsPerPage: itemsPerPage,
        });
    });

    it("should be called with an updated page number when passed", async () => {
        await getBooks(2);

        expect(axios.post).toHaveBeenCalledWith(api, { page: 2, itemsPerPage: itemsPerPage });
    });
});
