import UnreadBook from "../components/UnreadBook";
import useBookContext from "../contexts/BookContext";

export default function Unread() {
  const { books, toggleReadUnread } = useBookContext();

  return (
    <main className="app">
      <h1>Unread Books</h1>
      <UnreadBook />
      <ul>
        {books
          .filter((book) => !book.isRead)
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
