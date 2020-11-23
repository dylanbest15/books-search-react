import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import BookCard from "../../components/BookCard";

function Saved() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    API.getBooks()
      .then(res => setBooks(res.data) + console.log(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <>

      <div className="container">
        <Jumbotron />

        <div className="row saved-books">
          <h4>Saved Books</h4>
          {books ? books.map(book => (
            <BookCard
              key={book._id}
              volumeInfo={book}
              bookId={book._id}
              button="delete"
            />
          )) : null}
        </div>
      </div>

    </>
  )
}

export default Saved;