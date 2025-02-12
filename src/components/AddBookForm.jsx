import useHandleSubmit from "../customHooks/useHandleSubmit";

export default function AddBookForm() {
  const { formData, handleSubmit, handleChange } = useHandleSubmit();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book Title:"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="Book Author"
          value={formData.author}
          onChange={handleChange}
        />
        <br />
        <label>
          <input
            type="radio"
            name="isRead"
            value="read"
            checked={formData.isRead}
            onChange={handleChange}
          />
          Read
        </label>
        <label>
          <input
            type="radio"
            name="isRead"
            value="unread"
            checked={!formData.isRead}
            onChange={handleChange}
          />
          Un-read
        </label>
        <br />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
}
