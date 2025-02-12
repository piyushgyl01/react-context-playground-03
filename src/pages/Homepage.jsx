import NoBooks from "../components/NoBooks";
import Filters from "../components/Filters";
import useBookContext from "../contexts/BookContext";

export default function Homepage() {
  const { books, toggleReadUnread, deleteBook, filteredBooks } =
    useBookContext();

  return (
    <main className="app">
      <h1>All Books</h1>

      {books.length === 0 ? (
        <NoBooks />
      ) : (
        <>
          <Filters />
          <ul>
            {filteredBooks.map((book) => (
              <li
                key={book.title}
                style={{
                  textDecoration: book.isRead ? "line-through" : "none",
                }}
              >
                {book.title} by {book.author} <br />
                <button onClick={() => deleteBook(book)}>Delete</button>
                <button onClick={() => toggleReadUnread(book.title)}>
                  {book.isRead ? "Mark Unread" : "Mark Read"}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}
