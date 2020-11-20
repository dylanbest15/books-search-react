import React from "react";
import API from "../../utils/API";

function BookCard({ bookId, volumeInfo, button }) {

  function handleSaveClick(bookId, volumeInfo) {
    // event.preventDefault();
    API.saveBook({
      title: volumeInfo.title,
      authors: volumeInfo.authors,
      image: volumeInfo.imageLinks.thumbnail,
      synopsis: volumeInfo.description,
      link: volumeInfo.infoLink,
      bookId: bookId
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  function handleDeleteClick(bookId) {
    // event.preventDefault();
    API.deleteBook(bookId)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{volumeInfo.title}</h5>
        <h6 className="card-author">Written By {volumeInfo.authors ? volumeInfo.authors.join(", ") : "Unknown Author"}</h6>

        <p className="card-text">
          <img className="card-image" src={volumeInfo.imageLinks.thumbnail} alt={volumeInfo.title}></img>
          {volumeInfo.description || "No description provided by Google Books."}</p>

        {button === "search"
          ? <button className="btn btn-primary" onClick={() => handleSaveClick(bookId, volumeInfo)}>Save</button>
          : <button className="btn btn-primary" onClick={() => handleDeleteClick(bookId)}>Delete</button>
        }
        
      </div>
    </div>
  )
}

export default BookCard;