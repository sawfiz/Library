import Book from './Book';

// Library is an object that includes the library array and the associated methods
const Library = (() => {
  const library = [];

  function saveToLocalStorage() {
    localStorage.setItem('myLibrary', JSON.stringify(library));
  }

  function getFromLocalStorage() {
    const jsonArray = JSON.parse(localStorage.getItem('myLibrary'));
    if (!jsonArray || jsonArray.length === 0) {
      // If array is empty, populate it with a few books
      addBook('Lord of the Rings', 'J. R. R.Tolkin', 9250, true);
      addBook('A Game of Thrones', 'George R. R. Martin', 694, false);
      addBook('Harry Potter', 'J. K. Rowling', 607, false);
    }

    // Convert jasonArray into a list of Book objects
    // because Book objects have methods in addition to properties
    // Then push each Book object into the const library
    library.push(
      ...jsonArray.map((jsonBook) =>
        Book(jsonBook.title, jsonBook.author, jsonBook.pages, jsonBook.read)
      )
    );
  }

  function addBook(title, author, pages, read) {
    const newBook = Book(title, author, pages, read);
    library.push(newBook);
    saveToLocalStorage();
  }

  function updateBook(index, title, author, pages, read) {
    const book = library[index];
    book.title = title;
    book.author = author;
    book.pages = pages;
    book.read = read;
    saveToLocalStorage();
  }

  function toggleBook(index) {
    library[index].toggleRead();
    saveToLocalStorage();
  }

  function delBook(index) {
    library.splice(index, 1);
    saveToLocalStorage();
  }

  // Sorting functions
  let sortTitleAscend = true;
  let sortAuthorAscend = true;
  let sortPagesAscend = true;
  let sortReadAscend = true;

  function sortByKey(array, key, sortAscend) {
    return array.sort((a, b) => {
      // Sort pages as numbers
      if (key === 'pages') {
        if (sortAscend) {
          return +a[key] < +b[key] ? -1 : 1;
        }
        return +a[key] > +b[key] ? -1 : 1;
      }
      // Sort title, author as strings
      if (sortAscend) {
        return a[key] < b[key] ? -1 : 1;
      }
      return a[key] > b[key] ? -1 : 1;
    });
  }

  function sortBooks(key) {
    switch (key) {
      case 'title':
        sortByKey(library, key, sortTitleAscend);
        sortTitleAscend = !sortTitleAscend;
        break;
      case 'author':
        sortByKey(library, key, sortAuthorAscend);
        sortAuthorAscend = !sortAuthorAscend;
        break;
      case 'pages':
        sortByKey(library, key, sortPagesAscend);
        sortPagesAscend = !sortPagesAscend;
        break;
      case 'read':
        sortByKey(library, key, sortReadAscend);
        sortReadAscend = !sortReadAscend;
        break;

      default:
        break;
    }
  }

  return {
    addBook,
    updateBook,
    toggleBook,
    delBook,
    sortBooks,
    getFromLocalStorage,
    saveToLocalStorage,
    // ? What is difference between using get and access library[]
    // Even if you freeze the object, the array could still be modified.
    // Even if you used a getter- the array could still be modified if you aren't careful!
    // To protect the array, you can use a getter function that only ever returns
    // a copy of the array (hence a different area in memory,
    // preventing the original area in memory from being changed).
    get books() {
      return [...library];
    },
  };
})();

export default Library;
