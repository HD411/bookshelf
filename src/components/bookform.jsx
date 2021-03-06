function BookForm() {
  return (
    <form name="addForm">
      <div className="form-input">
        <label for="image_url">Image URL</label>
        <input
          type="text"
          id="Image_url"
          name="Image_url"
          placeholder="A url for the book cover"
        />
      </div>

      <div className="form-input">
        <label for="author_name">Author Name</label>
        <input
          type="text"
          id="author_name"
          name="author_name"
          placeholder="the full name of the author"
        />
      </div>

      <div className="form-input">
        <label for="book_name">Book Name</label>
        <input
          type="text"
          id="book_name"
          name="book_name"
          placeholder="the full name of the book"
        />
      </div>

      <div className="form-input">
        <label for="rating">Rating</label>
        <input
          type="text"
          id="rating"
          name="rating"
          placeholder="Your rating for this book"
        />
      </div>

      <div className="form-input">
        <button type="reset">Reset</button>
        <button type="submit">Add Book</button>
      </div>
    </form>
  );
}

export default BookForm;
