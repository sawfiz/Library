import Library from './Library';
import BookDisplay from './BookDisplay';
import deleteModal from './Modal-delete';
import bookModal from './Model-book-details';

const ScreenController = ((library, display) => {
  const contentContainerEl = document.querySelector('.content-container');

  // Append the modals
  contentContainerEl.appendChild(deleteModal.modalEl);
  contentContainerEl.appendChild(bookModal.modalEl);

  // Delete confirmation modal buttons event listeners
  const delConfirmBtn = document.querySelector('#delete-confirm');

  function deleteBook(e, index) {
    library.delBook(index);
    deleteModal.modalEl.close();
    display.render(library.books);
  }

  function showDelModal(index) {
    deleteModal.modalEl.showModal();
    const booktitleEl = document.querySelector('#book-title');
    booktitleEl.innerText = library.books[index].title;
    delConfirmBtn.addEventListener('click', (evt) => deleteBook(evt, index), {
      once: true,
    });
  }

  function addBook(e) {
    e.preventDefault();
    const formElems = e.target.elements;
    library.addBook(
      formElems.title.value,
      formElems.author.value,
      formElems.pages.value,
      formElems.read.checked
    );
    bookModal.modalEl.close();
    display.render(library.books);
  }

  function openAddBookModal() {
    bookModal.modalEl.showModal();
    bookModal.clearInputs();
    bookModal.modalEl.addEventListener('submit', addBook, { once: true });
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
    const formElems = e.target.elements;
    library.updateBook(
      index,
      formElems.title.value,
      formElems.author.value,
      formElems.pages.value,
      formElems.read.checked
    );
    bookModal.modalEl.close();
    display.render(library.books);
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

      // formEl.showModal();
      bookModal.modalEl.showModal();

      // Book details form elements
      const titleEl = document.querySelector('#title');
      const authorEl = document.querySelector('#author');
      const pagesEl = document.querySelector('#pages');
      const readEl = document.querySelector('#read');

      // Fill the form with selected book details
      titleEl.value = book.title;
      authorEl.value = book.author;
      pagesEl.value = book.pages;
      readEl.checked = book.read;

      bookModal.modalEl.addEventListener(
        'submit',
        (evt) => updateBook(evt, index),
        {
          once: true,
        }
      );
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
