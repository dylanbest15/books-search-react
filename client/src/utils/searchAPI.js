import axios from "axios";

export default {
  // searchs google books api
  searchBooks: function(title, author) {
    return axios.get(`${process.env.QUERY_STRING}q=${title}+inauthor:${author}&key=${process.env.API_KEY}`);
  } 
}