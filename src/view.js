import library from './library';
import controller from './controller';

import readIcon from './images/icons8-checked-checkbox-96.png';
import readingIcon from './images/icons8-process-96.png';
import editIcon from './images/icons8-compose-96.png';
import deleteIcon from './images/remove.png';
import modals from './modals';

const view = (() => {
  const tableBodyEl = document.querySelector('tbody');

  function displayBook(book) {
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
    const bookReadImg = document.createElement('img');
    bookReadImg.classList.add('read-status');
    bookRead.appendChild(bookReadImg);
    bookReadImg.src = book.isRead ? readIcon : readingIcon;
    bookRow.appendChild(bookRead);

    // Toggle book read status and icon image when the icon is clicked on
    bookReadImg.addEventListener('click', () => {
      controller.toggleRead(book);
    });

    const bookEdit = document.createElement('td');

    const bookEditImg = document.createElement('img');
    bookEditImg.src = editIcon;
    bookEdit.appendChild(bookEditImg);

    const bookRemoveImg = document.createElement('img');
    bookRemoveImg.src = deleteIcon;
    bookEdit.appendChild(bookRemoveImg);

    bookRow.appendChild(bookEdit);

    bookEditImg.addEventListener('click', () => {
      modals.openBookModal(book);
    });

    bookRemoveImg.addEventListener('click', () => {
      modals.openDeleteModal(book);
    });

    tableBodyEl.appendChild(bookRow);
  }

  function displayBookList() {
    tableBodyEl.innerHTML = '';
    library.forEach((book) => {
      displayBook(book);
    });
    console.log(library);
  }

  return { displayBookList };
})();

export default view;
