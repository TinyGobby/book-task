const axios = require("axios");
export const api = "http://nyx.vima.ekt.gr:3000/api/books";

async function getBooks(page = 1) {
    const searchParams = { page: page };
    return await axios.post(api, searchParams).then(response => response.data);
}

export default getBooks;
