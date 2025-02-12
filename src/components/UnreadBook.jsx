import { Link } from "react-router-dom";
import useBookContext from "../contexts/BookContext";

export default function UnreadBook() {
  const { books } = useBookContext();

  return (
    <>
      {books.filter((book) => !book.isRead).length === 0 && (
        <p>
          No un-read books found <br />
          <Link to="/">
            <button>Read More Books</button>
          </Link>
        </p>
      )}
    </>
  );
}
