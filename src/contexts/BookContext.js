import { createContext, useContext } from "react";
import { useEffect, useState } from "react";

const BookContext = createContext();

const useBookContext = () => useContext(BookContext);

export default useBookContext;

export function BookProvider({ children }) {
  const bookData = [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      isRead: true,
    },
    {
      title: "1984",
      author: "George Orwell",
      isRead: false,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      isRead: true,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      isRead: false,
    },
  ];

  const [filter, setFilter] = useState("All Books");

  const [books, setBook] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    if (savedBooks === null) {
      localStorage.setItem("books", JSON.stringify(bookData));
      return bookData;
    }
    try {
      return JSON.parse(savedBooks);
    } catch {
      return bookData;
    }
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const toggleReadUnread = (toggledBook) => {
    const updatedBooks = books.map((book) => {
      if (book.title !== toggledBook) {
        return book;
      }
      return {
        ...book,
        isRead: !book.isRead,
      };
    });

    setBook(updatedBooks);
  };

  const addBook = (newBook) => {
    setBook([...books, newBook]);
  };

  const deleteBook = (deletedBook) => {
    setBook(books.filter((book) => book.author !== deletedBook.author));
  };

  const filteredBooks = books.filter((book) => {
    if (filter === "All Books") return true;
    if (filter === "Read Books") return book.isRead;
    if (filter === "Unread Books") return !book.isRead;
    return true;
  });

  return (
    <BookContext.Provider
      value={{
        books,
        toggleReadUnread,
        addBook,
        deleteBook,
        filter,
        setFilter,
        filteredBooks,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}
