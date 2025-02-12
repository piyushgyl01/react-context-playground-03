// Nav.js
import React from "react";
import { Link } from "react-router-dom";

import UnreadCounter from "./UnreadCounter";

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <div className="logo">Book Tracker</div>
      </Link>
      <div className="links">
        <Link to="/" className="nav-link">
          Books
        </Link>
        <Link to="/add-book" className="nav-link">
          Add Book
        </Link>
        <Link to="/read" className="nav-link">
          Read
        </Link>
        <Link to="/unread" className="nav-link">
          Unread <UnreadCounter />
        </Link>
      </div>
    </nav>
  );
}
