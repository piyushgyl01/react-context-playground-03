import ReadBook from "../components/ReadBook";
import useBookContext from "../contexts/BookContext";

export default function Read() {
  const { books, toggleReadUnread } = useBookContext();

  return (
    <main className="app">
      <h1>Read Books</h1>
      <ReadBook />
      <ul>
        {books
          .filter((book) => book.isRead)
          .map((book) => (
            <li key={book.title}>
              {book.title} by {book.author} <br />
              <button onClick={() => toggleReadUnread(book.title)}>
                {book.isRead ? "Unread" : "Read"}
              </button>
            </li>
          ))}
      </ul>
    </main>
  );
}
