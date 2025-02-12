import useBookContext from "../contexts/BookContext";

export default function UnreadCounter() {
  const { books } = useBookContext();

  return (
    <>
      ({books.filter((book) => !book.isRead).length}/{books.length})
    </>
  );
}
