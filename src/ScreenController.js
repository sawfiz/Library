import Library from './Library';
import BookDisplay from './BookDisplay';

const ScreenController = ((library, display) => {
  function init() {
    // Event listener for the buttons in the book list
    library.getFromLocalStorage();
    BookDisplay.render(library.books);
    display.displayEl.addEventListener('click', editBook);

    // Event listner for the add book button
    const addBookImgEl = document.querySelector('.addBookImg');
    addBookImgEl.addEventListener('click', addBook);

    // Event listeners for the sort buttons
    const sortBtns = Array.from(document.querySelectorAll('.sort-img'));
    sortBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        library.sortBooks(btn.getAttribute('data-key'));
        display.render(library.books);
      });
    });
  }

  // Book details form elements
  const formEl = document.querySelector('#book-form');
  const titleEl = document.querySelector('#title');
  const authorEl = document.querySelector('#author');
  const pagesEl = document.querySelector('#pages');
  const readEl = document.querySelector('#read');

  function clearInputs() {
    titleEl.value = '';
    authorEl.value = '';
    pagesEl.value = null;
    readEl.checked = false;
  }

  function addBook() {
    formEl.showModal();
    clearInputs();
    formEl.addEventListener(
      'submit',
      (e) => {
        e.preventDefault();
        library.addBook(
          titleEl.value,
          authorEl.value,
          pagesEl.value,
          readEl.checked
        );
        formEl.close();
        display.render(library.books);
      },
      { once: true }
    );
  }

  function editBook(e) {
    if (e.target.className === 'read-status') {
      const index = e.target.getAttribute('data-key');
      library.toggleBook(index);
      display.render(library.books);
    } else if (e.target.className === 'del-btn') {
      const index = e.target.getAttribute('data-key');
      library.delBook(index);
      display.render(library.books);
    } else if (e.target.className === 'edit-btn') {
      const index = e.target.getAttribute('data-key');
      const book = library.books[index];

      formEl.showModal();
      titleEl.value = book.title;
      authorEl.value = book.author;
      pagesEl.value = book.pages;
      readEl.checked = book.read;

      formEl.addEventListener(
        'submit',
        (e) => {
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
        },
        { once: true }
      );
    }
  }

  return { init };
})(Library, BookDisplay);

export default ScreenController;
