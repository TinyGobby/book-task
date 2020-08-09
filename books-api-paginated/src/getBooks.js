const axios = require("axios");
const api = "http://nyx.vima.ekt.gr:3000/api/books";

async function getBooks() {
    const searchParams = {page: 1}
    return await axios.post(api, searchParams).then(response => response.data);
}

export default getBooks;
