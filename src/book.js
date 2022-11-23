const Book = (title, author, pages, read) => ({
  title,
  author,
  pages,
  // Using a getter get without a setter set makes it so that you can read that property of the object,
  // but you cannot change it's value.
  // The only way to change the value of read in this case is to use the toggleRead function.
  get read() {
    return read;
  },
  set read(value) {
    read = value;
  },
  toggleRead() {
    return (read = !read);
  },
});

export default Book;

// TODO: Consider using Object.freeze
