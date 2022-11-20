import bookFactory from './book';
import controller from './controller';
// import view from './view';

const modals = (() => {
  // Book details form elements
  const formEl = document.querySelector('#book-form');
  const titleEl = document.querySelector('#title');
  const authorEl = document.querySelector('#author');
  const pagesEl = document.querySelector('#pages');
  const readEl = document.querySelector('#read');
  const formCloselBtn = document.querySelector('.book-form-close');
  const formConfirmBtn = document.querySelector('#addBookBtn');

  function clearInputs() {
    titleEl.value = '';
    authorEl.value = '';
    pagesEl.value = null;
    readEl.checked = false;
  }

  function openBookModal(book) {
    clearInputs();
    formEl.showModal();

    // Fill in book deatils if editing an existing book
    if (book !== undefined) {
      titleEl.value = book.title;
      authorEl.value = book.author;
      pagesEl.value = book.pages;
      readEl.checked = book.isRead;
    }

    formConfirmBtn.addEventListener(
      'click',
      (e) => {
        e.preventDefault();
        if (book === undefined) { // Adding a new book
          if (
            titleEl.value.length >= 1 &&
            authorEl.value.length >= 1 &&
            pagesEl.value >= 1
          ) {
            const newBook = bookFactory(
              0, // Default book number
              titleEl.value,
              authorEl.value,
              pagesEl.value,
              readEl.checked
            );
            controller.addBook(newBook);
          }
        } else { // Editing an existing book
          book.title = titleEl.value;
          book.author = authorEl.value;
          book.pages = pagesEl.value;
          book.isRead = readEl.checked;
        }
        formEl.close();
        // * I do not really need to do this.
        // * I can just call view.displayBookList() here
        controller.updateBook();  
      },
      { once: true } // !Fire this event listener only once since it is in a function
    );
  }

  // Buttons for the book details form
  formCloselBtn.addEventListener('click', () => {
    formEl.close();
    clearInputs();
  });

  // Delete book alert elements
  const deleteAlertEl = document.querySelector('#delete-alert');
  const deleteBookTitleEl = document.querySelector('#book-title');
  const deleteCancelBtn = document.querySelector('#delete-cancel');
  const deleteConfirmBtn = document.querySelector('#delete-confirm');

  function openDeleteModal(book) {
    deleteAlertEl.showModal();
    deleteBookTitleEl.innerText = book.title;
    deleteConfirmBtn.addEventListener(
      'click',
      () => {
        deleteAlertEl.close();
        controller.deleteBook(book);
      },
      { once: true } // !Fire this event listener only once since it is in a function
    );
  }

  // Buttons for the book deletion alert
  deleteCancelBtn.addEventListener('click', () => {
    deleteAlertEl.close();
  });

  return { openBookModal, openDeleteModal };
})();

export default modals;
