import React, { useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import BookCard from "../../components/BookCard";
import API from "../../utils/API";
import "./search.css";

function Search() {

  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  function handleInputChange(event) {
    setSearch(event.target.value.replace(/ /g, "+"));
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    API.searchBooks(search)
      .then(res => setBooks(res.data.items))
      .catch(err => console.log(err));
  }

  return (
    <>

      <div className="container">
        <Jumbotron />

        <form onSubmit={handleFormSubmit}>
          <h4>Book Search</h4>
          <div className="row search-box">
            <div className="col-12 search-input">
              <input className="form-control" type="text" placeholder="Search" aria-label="Search"
                onChange={handleInputChange}></input>
            </div>
          </div>
          <div className="row button-row justify-content-end">
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </form>

        <div className="row search-results">
          <h4>Results</h4>
          {books ? books.map(book => (
            <BookCard
              key={book.id}
              volumeInfo={book.volumeInfo}
              button="search"
            />
          )) : null}
        </div>
      </div>

    </>
  )
}

export default Search;