import React from "react";

function BookCard({ volumeInfo }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{volumeInfo.title}</h5>
        <h6 className="card-author">Written By {volumeInfo.authors.join(", ")}</h6>

        <p className="card-text">
          <img className="card-image" src={volumeInfo.imageLinks.thumbnail} alt={volumeInfo.title}></img>
          {volumeInfo.description || "No description provided by Google Books."}</p>

        <button className="btn btn-primary">Save</button>
      </div>
    </div>
  )
}

export default BookCard;