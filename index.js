// Header elements
const addBookImgEl = document.querySelector('.addBookImg');

// Table elements
const tableBodyEl = document.querySelector('tbody');
const sortTitleEl = document.querySelector('#sort-title');
const sortAuthorEl = document.querySelector('#sort-author');
const sortPagesEl = document.querySelector('#sort-pages');
const sortReadEl = document.querySelector('#sort-read');

// Modals and overlay
const overlayEl = document.querySelector('.overlay');

// Book details form elements
const formEl = document.querySelector('.modal#book-form');
const titleEl = document.querySelector('#title');
const authorEl = document.querySelector('#author');
const pagesEl = document.querySelector('#pages');
const readEl = document.querySelector('#read');
const formCloselBtn = document.querySelector('.book-form-close');
const formConfirmBtn = document.querySelector('#addBookBtn');

// Delete book alert elements
const deleteAlertEl = document.querySelector('.modal#delete-alert');
const deleteBookTitleEl = document.querySelector('#book-title');
const deleteCancelBtn = document.querySelector('#delete-cancel');
const deleteConfirmBtn = document.querySelector('#delete-confirm');

// Variables initialization
const library = [];
let bookToDelete; // To pass the book to delete
let bookToEdit; // To pass the book to edit
let isNewBook;

// The Book object
class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

// Modal functions
function openModal(modal) {
  if (modal === null) return;
  modal.classList.add('active');
  overlayEl.classList.add('active');
}

function closeModal(modal) {
  if (modal === null) return;
  modal.classList.remove('active');
  overlayEl.classList.remove('active');
}

// Book prototype functions
Book.prototype.addToLibrary = function () {
  library.push(this);
  console.log(library);
};

Book.prototype.removeFromLibrary = function () {
  library.splice(library.indexOf(this), 1);
  bookToDelete = null;
};

Book.prototype.addToDisplay = function () {
  const bookRow = document.createElement('tr');

  const bookTitle = document.createElement('td');
  bookTitle.innerText = this.title;
  bookRow.appendChild(bookTitle);

  const bookAuthor = document.createElement('td');
  bookAuthor.innerText = this.author;
  bookRow.appendChild(bookAuthor);

  const bookPages = document.createElement('td');
  bookPages.innerText = this.pages;
  bookRow.appendChild(bookPages);

  const bookRead = document.createElement('td');
  const bookReadImg = document.createElement('img');
  bookRead.appendChild(bookReadImg);
  bookReadImg.src = this.isRead
    ? 'images/icons8-checked-checkbox-96.png'
    : 'images/icons8-process-96.png';
  bookRow.appendChild(bookRead);

  // Toggle book read status and icon image when the icon is clicked on
  bookReadImg.addEventListener('click', () => {
    bookReadImg.src = this.isRead
      ? 'images/icons8-process-96.png'
      : 'images/icons8-checked-checkbox-96.png';
    this.isRead = !this.isRead;
  });

  const bookEdit = document.createElement('td');

  const bookEditImg = document.createElement('img');
  bookEditImg.src = 'images/icons8-compose-96.png';
  bookEdit.appendChild(bookEditImg);

  const bookRemoveImg = document.createElement('img');
  bookRemoveImg.src = 'images/remove.png';
  bookEdit.appendChild(bookRemoveImg);

  bookRow.appendChild(bookEdit);

  bookEditImg.addEventListener('click', () => {
    isNewBook = false;
    openModal(formEl);
    titleEl.value = this.title;
    authorEl.value = this.author;
    pagesEl.value = this.pages;
    readEl.checked = this.isRead;
    console.log(this.isRead);
    
    bookToEdit = this;
  });

  bookRemoveImg.addEventListener('click', () => {
    openModal(deleteAlertEl);
    deleteBookTitleEl.innerText = this.title;
    bookToDelete = this;
  });

  tableBodyEl.appendChild(bookRow);
};

// Other functions
function displayLibrary() {
  tableBodyEl.innerHTML = '';
  library.forEach((book) => {
    book.addToDisplay();
  });
}

function clearInputs() {
  titleEl.value = '';
  authorEl.value = '';
  pagesEl.value = null;
  readEl.checked = false;
}

function sortByKey(array, key, sortAscend) {
  return array.sort((a, b) => {
    if (sortAscend) {
      return a[key] < b[key] ? -1 : 1;
    }
    return a[key] > b[key] ? -1 : 1;
  });
}

// Initialize the library book list
const book1 = new Book('Lord of the Rings', 'J. R. R.Tolkin', 9250, true);
const book2 = new Book('A Game of Thrones', 'George R. R. Martin', 694, false);
const book3 = new Book(
  'Harry Potter and the Deathly Hallows',
  'J. K. Rowling',
  607,
  false
);
const book4 = new Book('The Hunger Games', 'Suzanne Collins', 344, true);
const book5 = new Book('Pride and Prejudice', 'Jane Austin', 550, false);
const book6 = new Book('To Kill a Mockngbird', 'Harper Lee', 263, false);
const book14 = new Book('The Book Thief', 'Mark Zusak', 344, true);
const book15 = new Book('Animal Farm', 'George Orwell', 550, false);
const book16 = new Book('The Chronicles of Narnia', 'C. S, Lewis', 263, false);
const book24 = new Book('The Da Vinci Code', 'Dan Brown', 344, true);
const book25 = new Book('Jane Eyre', 'Charlotte Bronte', 550, false);
const book26 = new Book('Gone with the Wind', 'Margaret Mitchell', 263, false);
const book34 = new Book(
  "Alice's Advantures in Wonderland",
  'Lewis Carroll',
  344,
  true
);
const book35 = new Book(
  'The Little Prince',
  'Antione de Saint-Exupery',
  550,
  false
);
const book36 = new Book('Les Miserables', 'Victor Hugo', 263, false);
const book44 = new Book('Anne of Green Gables', 'L. M. Montgomery', 344, true);
const book45 = new Book(
  "The Hitchhiker's Guide to the Galaxy",
  'Douglas Adams',
  550,
  false
);
const book46 = new Book("Ender's Game", 'Orson Scott Card', 263, false);
const book54 = new Book("Charlotte's Web", 'E.B. White', 344, true);
const book55 = new Book('The Alchemist', 'Poulo Coelho', 550, false);
const book56 = new Book('The Catcher in the Rye', 'J.D. Salinger', 263, false);

book1.addToLibrary();
book2.addToLibrary();
book3.addToLibrary();
book4.addToLibrary();
book5.addToLibrary();
book6.addToLibrary();

displayLibrary();

// Main event listeners
addBookImgEl.addEventListener('click', () => {
  isNewBook = true;
  clearInputs();
  openModal(formEl);
});

// Buttons for the book details form
formCloselBtn.addEventListener('click', () => {
  closeModal(formEl);
  clearInputs();
});

formConfirmBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (
    titleEl.value.length >= 1 &&
    authorEl.value.length >= 3 &&
    pagesEl.value >= 1
  ) {
    if (isNewBook === true) {
      const newBook = new Book(
        titleEl.value,
        authorEl.value,
        pagesEl.value,
        readEl.checked
      );
      newBook.addToLibrary();
      newBook.addToDisplay();
    } else {
      // Edit mode
      bookToEdit.title = titleEl.value;
      bookToEdit.author = authorEl.value;
      bookToEdit.pages = pagesEl.value;
      bookToEdit.isRead = readEl.checked;
    }
    closeModal(formEl);
    displayLibrary();
  }
});

// Buttons for the book deletion alert
deleteCancelBtn.addEventListener('click', () => {
  closeModal(deleteAlertEl);
});

deleteConfirmBtn.addEventListener('click', () => {
  closeModal(deleteAlertEl);
  bookToDelete.removeFromLibrary();
  displayLibrary();
});

// Table header sort buttons
let sortTitleAscend = true;
let sortAuthorAscend = true;
let sortPagesAscend = true;
let sortReadAscend = true;

sortTitleEl.addEventListener('click', () => {
  sortByKey(library, 'title', sortTitleAscend);
  sortTitleAscend = !sortTitleAscend;
  displayLibrary();
});

sortAuthorEl.addEventListener('click', () => {
  sortByKey(library, 'author', sortAuthorAscend);
  sortAuthorAscend = !sortAuthorAscend;
  displayLibrary();
});

sortPagesEl.addEventListener('click', () => {
  sortByKey(library, 'pages', sortPagesAscend);
  sortPagesAscend = !sortPagesAscend;
  displayLibrary();
});

sortReadEl.addEventListener('click', () => {
  sortByKey(library, 'isRead', sortReadAscend);
  sortReadAscend = !sortReadAscend;
  displayLibrary();
});

// Click outside of a popup closes the popup
overlayEl.addEventListener('click', () => {
  const modalsEl = document.querySelectorAll('.modal.active');
  modalsEl.forEach((modal) => {
    closeModal(modal);
  });
});
