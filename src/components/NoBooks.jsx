import { Link } from "react-router-dom";

export default function NoBooks() {
  return (
    <p>
      No books found <br />
      <Link to="/add-book">
        <button>Add New Books</button>
      </Link>
    </p>
  );
}
