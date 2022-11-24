import Library from './Library';
import BookDisplay from './BookDisplay';

const ScreenController = ((library, display) => {
  // Book details form elements
  const formEl = document.querySelector('#book-form');
  const titleEl = document.querySelector('#title');
  const authorEl = document.querySelector('#author');
  const pagesEl = document.querySelector('#pages');
  const readEl = document.querySelector('#read');
  const bookFormCloseBtn = document.querySelector('.book-form-close');
  bookFormCloseBtn.addEventListener('click', () => formEl.close());

  // Delete confirmation modal elements
  const delAlertEl = document.querySelector('#delete-alert');
  const delCancelBtn = document.querySelector('#delete-cancel');
  delCancelBtn.addEventListener('click', () => delAlertEl.close());
  const delConfirmBtn = document.querySelector('#delete-confirm');

  // Clear form input fields
  function clearInputs() {
    titleEl.value = '';
    authorEl.value = '';
    pagesEl.value = null;
    readEl.checked = false;
  }

  function addBook(e) {
    e.preventDefault();
    library.addBook(
      titleEl.value,
      authorEl.value,
      pagesEl.value,
      readEl.checked
    );
    formEl.close();
    display.render(library.books);
  }

  function openAddBookModal() {
    formEl.showModal();
    clearInputs();
    formEl.addEventListener('submit', addBook, { once: true });
  }

  function sortBooks(e) {
    if (e.target.className === 'sort-img') {
      const sortKey = e.target.getAttribute('data-key');
      library.sortBooks(sortKey);
      display.render(library.books);
    }
  }

  function updateBook(e, index) {
    e.preventDefault();
    library.updateBook(
      index,
      titleEl.value,
      authorEl.value,
      pagesEl.value,
      readEl.checked
    );
    formEl.close();
    display.render(library.books);
  }

  function deleteBook(index) {
    library.delBook(index);
    delAlertEl.close();
    display.render(library.books);
  }

  function showDelModal(index) {
    delAlertEl.showModal();
    const booktitleEl = document.querySelector('#book-title');
    booktitleEl.innerText = library.books[index].title;
    delConfirmBtn.addEventListener('click', deleteBook, { once: true });
  }

  function modifyBook(e) {
    if (e.target.className === 'read-status') {
      const index = e.target.getAttribute('data-key');
      library.toggleBook(index);
      display.render(library.books);
    } else if (e.target.className === 'del-btn') {
      const index = e.target.getAttribute('data-key');
      showDelModal(index);
    } else if (e.target.className === 'edit-btn') {
      const index = e.target.getAttribute('data-key');
      const book = library.books[index];

      formEl.showModal();
      // Fill the form with selected book details
      titleEl.value = book.title;
      authorEl.value = book.author;
      pagesEl.value = book.pages;
      readEl.checked = book.read;

      formEl.addEventListener('submit', (evt) => updateBook(evt, index), {
        once: true,
      });
    }
  }

  function init() {
    // Event listner for the add book button
    const addBookImgEl = document.querySelector('.addBookImg');
    addBookImgEl.addEventListener('click', openAddBookModal);

    // Event listeners for the sort buttons in the table head
    const theadEl = document.querySelector('thead');
    theadEl.addEventListener('click', sortBooks);

    // Event listener for the buttons in the book list
    library.getFromLocalStorage();
    BookDisplay.render(library.books);
    display.displayEl.addEventListener('click', modifyBook);
  }

  return { init };
})(Library, BookDisplay);

export default ScreenController;
