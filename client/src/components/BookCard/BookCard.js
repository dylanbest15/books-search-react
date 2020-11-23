import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function BookCard({ bookId, volumeInfo, button }) {

  const [saveText, setSaveText] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setSaveText("Save");
  }, []);

  function handleSaveClick(bookId, volumeInfo) {
    setSaveText("Saved!");
    setDisabled(true);
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
    window.location.reload();
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
          <img className="card-image"
            src={button === "search" ? volumeInfo.imageLinks.thumbnail : volumeInfo.image}
            alt={volumeInfo.title}></img>

          {button === "search" 
            ? volumeInfo.description || "No description provided by Google Books." 
            : volumeInfo.synopsis || "No description provided by Google Books."
          }</p>

        {button === "search" 
          ? <a href={volumeInfo.infoLink}>{volumeInfo.infoLink}</a>
          : <a href={volumeInfo.link}>{volumeInfo.link}</a>
        }
        

        {button === "search"
          ? <button className="btn btn-primary" onClick={() => handleSaveClick(bookId, volumeInfo)} disabled={disabled}>{saveText}</button>
          : <button className="btn btn-primary" onClick={() => handleDeleteClick(bookId)}>Delete</button>
        }

      </div>
    </div>
  )
}

export default BookCard;