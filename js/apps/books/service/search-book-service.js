
export const addBookService = {
    searchForAbook,
}

function searchForAbook(bookName) {
    if (bookName === '') return []
    return axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${bookName}`)
        .then(foundBooks => foundBooks.data)
        .then(booksData=>booksData.items)

}

