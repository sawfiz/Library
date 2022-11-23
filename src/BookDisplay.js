import createElement from './createElement';
import readIcon from './images/icons8-checked-checkbox-96.png';
import readingIcon from './images/icons8-process-96.png';
import editIcon from './images/icons8-compose-96.png';
import deleteIcon from './images/remove.png';

const BookDisplay = (() => {
  const displayEl = document.querySelector('tbody');

  function displayBook(book, index) {
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
    const bookReadImg = createElement('img', ['read-status'], {
      'data-key': index,
    });
    bookRead.appendChild(bookReadImg);
    bookReadImg.src = book.read ? readIcon : readingIcon;
    bookRow.appendChild(bookRead);

    const bookEdit = document.createElement('td');
    const bookEditImg = createElement('img', ['edit-btn'], {
      'data-key': index,
    });
    bookEditImg.src = editIcon;
    bookEdit.appendChild(bookEditImg);

    const bookRemoveImg = createElement('img', ['del-btn'], {
      'data-key': index,
    });
    bookRemoveImg.src = deleteIcon;
    bookEdit.appendChild(bookRemoveImg);

    bookRow.appendChild(bookEdit);

    displayEl.appendChild(bookRow);
  }
  
  function render(books) {
    displayEl.innerText = '';
    books.forEach((book) => {
      displayBook(book, books.indexOf(book));
    });
  }

  return {
    render,
    get displayEl() {
      return displayEl;
    },
  };
})();

export default BookDisplay;
