import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <a className="navbar-brand" href="/">Google Books Search</a>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/search">Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/saved">Saved</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;