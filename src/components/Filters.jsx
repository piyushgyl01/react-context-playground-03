import useBookContext from "../contexts/BookContext";

export default function Filters() {
  const { filter, setFilter } = useBookContext();

  return (
    <>
      <label>Filter books by: </label> <br />
      <label>
        <input
          type="radio"
          name="filter"
          value="All Books"
          checked={filter === "All Books"}
          onChange={(e) => setFilter(e.target.value)}
        />
        All Books
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="Read Books"
          checked={filter === "Read Books"}
          onChange={(e) => setFilter(e.target.value)}
        />
        Read Books
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="Unread Books"
          checked={filter === "Unread Books"}
          onChange={(e) => setFilter(e.target.value)}
        />
        Unread Books
      </label>
    </>
  );
}
