import { api, itemsPerPage, defaultPageNumber } from "./constants";
const axios = require("axios");

async function getBooks(page = defaultPageNumber, searchTerm = "") {
    const searchParams = {
        page: page,
        itemsPerPage: itemsPerPage,
        filters: [{ type: "all", values: [searchTerm] }],
    };

    return await axios.post(api, searchParams).then((response) => response.data);
}

export default getBooks;
