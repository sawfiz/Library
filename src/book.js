const Book = (title, author, pages, read) => ({
  title,
  author,
  pages,
  // Using a getter get without a setter set makes it so that you can read that property
  // of the object, but you cannot change it's value.
  // The only way to change the value of read in this case is to use the toggleRead function.
  get read() {
    return read;
  },
  // I added this setter because I want user to be able to change it's value
  set read(value) {
    read = value;
  },
  // If I do not have the getter/setter, toggleRead() does not work
  // It toggles the value of read in the function,
  // but does not toggle the value of read in the object
  toggleRead() {
    console.log(read);
    read = !read;
    console.log(read);
  },
});

export default Book;

// TODO: Consider using Object.freeze
