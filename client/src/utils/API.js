import axios from "axios";

export default {
  // searches google books api
  searchBooks: function(searchInput) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}`);
  },
  // gets saved books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // creates new saved book
  saveBook: function(bookData) {
    return axios.get("/api/books", bookData);
  },
  // deletes saved book
  deleteBook: function(id) {
    return axios.get(`/api/books/${id}`);
  }
}