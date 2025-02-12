import { Link } from "react-router-dom";
import useBookContext from "../contexts/BookContext";

export default function ReadBook() {
  const { books } = useBookContext();

  return (
    <>
      {books.filter((book) => book.isRead).length === 0 && (
        <p>
          No read books found <br />{" "}
          <Link to="/">
            <button>Read Books</button>
          </Link>
        </p>
      )}
    </>
  );
}
