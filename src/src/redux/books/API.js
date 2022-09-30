export default class BookAPI {
    static fetchBooks = () => {
      const bookArr = [];
      const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0dD0dLmve3Pw2n9nVQ6B/books/';
      return fetch(API)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((json) => {
          Object.keys(json).forEach((bookId) => {
            bookArr.push({
              id: bookId,
              title: json[bookId][0].title,
              author: json[bookId][0].author,
            });
          });
          return bookArr;
        });
    };

    static addBook = async ({
      id, title, author, category,
    }) => {
      const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0dD0dLmve3Pw2n9nVQ6B/books';
      await fetch(API, {
        method: 'POST',
        body: JSON.stringify({
          item_id: id,
          title,
          author,
          category,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    }

    static deleteBook = async (bookId) => {
      const API = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/0dD0dLmve3Pw2n9nVQ6B/books/${bookId}`;
      await fetch(API, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    }
}
