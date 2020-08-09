import { api, defaultPageNumber, itemsPerPage } from "./constants";
const axios = require("axios");

async function getBooks(page = defaultPageNumber) {
    const searchParams = { page: page, itemsPerPage: itemsPerPage };
    return await axios.post(api, searchParams).then((response) => response.data);
}

export default getBooks;
