import React, { useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import searchAPI from "../../utils/searchAPI";
import "./search.css";

function Search() {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSearch = e => {
    e.preventDefault();
    console.log("title is " + title);
    console.log("author is " + author);
    // return searchAPI.searchBooks(title, author);
  }

  return (
    <>

      <div className="container">
        <Jumbotron />

        <form onSubmit={handleSearch}>
          <p>Book Search</p>
          <div className="row search-box">
            <div className="col-6 title-search">
              <input className="form-control title-input" type="text" placeholder="Title" aria-label="Search"
                onChange={e => setTitle(e.target.value.replace(/ /g, "+"))}></input>
            </div>
            <div className="col-6 author-search">
              <input className="form-control author-input" type="text" placeholder="Author" aria-label="Search"
                onChange={e => setAuthor(e.target.value.replace(/ /g, "+"))}></input>
            </div>
          </div>
          <div className="row button-row justify-content-end">
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </form>

      </div>

    </>
  )
}

export default Search;