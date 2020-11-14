import axios from "axios";

export default {
  // searches google books api
  searchBooks: function(searchInput) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}`);
  },
}