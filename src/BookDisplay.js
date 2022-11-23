import createElement from './createElement';
import readIcon from './images/icons8-checked-checkbox-96.png';
import readingIcon from './images/icons8-process-96.png';
import editIcon from './images/icons8-compose-96.png';
import deleteIcon from './images/remove.png';

const BookDisplay = (() => {
  let displayEl = null;

  function displayBook(book, index) {
    console.log(book, index);

    const bookRow = document.createElement('tr');

    const bookTitle = document.createElement('td');
    bookTitle.innerText = book.title;
    bookRow.appendChild(bookTitle);

    const bookAuthor = document.createElement('td');
    bookAuthor.innerText = book.author;
    bookRow.appendChild(bookAuthor);

    const bookPages = document.createElement('td');
    bookPages.innerText = book.pages;
    bookRow.appendChild(bookPages);

    const bookRead = document.createElement('td');
    bookRead.setAttribute('data-key', index);
    const bookReadImg = document.createElement('img');
    bookReadImg.classList.add('read-status');
    bookRead.appendChild(bookReadImg);
    bookReadImg.src = book.read ? readIcon : readingIcon;
    bookRow.appendChild(bookRead);

    const bookEdit = document.createElement('td');
    bookEdit.setAttribute('data-key', index);

    const bookEditImg = document.createElement('img');
    bookEditImg.classList.add('edit-btn');
    bookEditImg.src = editIcon;
    bookEdit.appendChild(bookEditImg);

    const bookRemoveImg = document.createElement('img');
    bookRemoveImg.classList.add('del-btn');
    bookRemoveImg.src = deleteIcon;
    bookEdit.appendChild(bookRemoveImg);

    bookRow.appendChild(bookEdit);

    displayEl.appendChild(bookRow);
  }

  function clear() {
    displayEl.innerText = '';
  }

  function render(books) {
    clear();
    console.log(books);
    console.log(displayEl);
    books.forEach((book) => {
      displayBook(book, books.indexOf(book));
    });
  }

  return {
    render,
    get displayEl() {
      return displayEl;
    },
    set displayEl(el) {
      displayEl = el;
    },
  };
})();

export default BookDisplay;
