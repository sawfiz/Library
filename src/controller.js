import library from './Library';
import view from './view';

const controller = (() => {
  // Table header sort buttons
  let sortTitleAscend = true;
  let sortAuthorAscend = true;
  let sortPagesAscend = true;
  let sortReadAscend = true;

  let number = 1;

  function addBook(book) {
    book.number = number;
    number++;

    library.push(book);
    view.displayBookList(library);
  }

  function toggleRead(book) {
    book.isRead = !book.isRead;
    view.displayBookList(library);
  }

  function updateBook(book) {
    view.displayBookList(library);
  }

  function deleteBook(book) {
    library.splice(library.indexOf(book), 1);
    view.displayBookList(library);
  }

  function sortByKey(array, key, sortAscend) {
    return array.sort((a, b) => {
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
      case 'isRead':
        sortByKey(library, key, sortReadAscend);
        sortReadAscend = !sortReadAscend;
        break;

      default:
        break;
    }
    // view.displayBookList(library);
  }

  return { addBook, toggleRead, updateBook, deleteBook, sortBooks };
})();

export default controller;
