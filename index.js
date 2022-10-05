// Header elements
const addBookImgEl = document.querySelector('.addBookImg');

// Table elements
const tableBodyEl = document.querySelector('tbody');
const sortTitleEl = document.querySelector('#sort-title');
const sortAuthorEl = document.querySelector('#sort-author');
const sortPagesEl = document.querySelector('#sort-pages');
const sortReadEl = document.querySelector('#sort-read');

// Book details form elements
const formEl = document.querySelector('#book-form');
const titleEl = document.querySelector('#title');
const authorEl = document.querySelector('#author');
const pagesEl = document.querySelector('#pages');
const readEl = document.querySelector('#read');
const formCancelBtn = document.querySelector('#cancelBtn');
const formConfirmBtn = document.querySelector('#addBookBtn');

// Delete book alert elements
const deleteAlertEl = document.querySelector('#delete-alert');
const deleteBookTitleEl = document.querySelector('#book-title');
const deleteCancelBtn = document.querySelector('#delete-cancel');
const deleteConfirmBtn = document.querySelector('#delete-confirm');

// Variables initialization
const library = [];
let bookToDelete; // To pass the book for delete

// The Book object
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  library.push(book);
}

function addBookToDisplay(book) {
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
  bookRead.appendChild(bookReadImg);
  bookReadImg.src = book.isRead
    ? 'images/icons8-checked-checkbox-96.png'
    : 'images/icons8-process-96.png';
  bookRow.appendChild(bookRead);

  // Toggle book read status and icon image when the icon is clicked on
  bookReadImg.addEventListener('click', () => {
    bookReadImg.src = book.isRead
      ? 'images/icons8-process-96.png'
      : 'images/icons8-checked-checkbox-96.png';
    book.isRead = !book.isRead;
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
    formEl.classList.remove('hidden');
    titleEl.value = book.title;
    authorEl.value = book.author;
    pagesEl.value = book.pages;
    readEl.checked = book.checked;
    library.splice(library.indexOf(book), 1);
  });

  bookRemoveImg.addEventListener('click', () => {
    deleteAlertEl.classList.remove('hidden');
    deleteBookTitleEl.innerText = book.title;
    bookToDelete = book;
  });

  tableBodyEl.appendChild(bookRow);
}

function displayLibrary() {
  library.forEach((book) => {
    addBookToDisplay(book);
  });
}

function clearLibraryDisplay() {
  tableBodyEl.innerHTML = '';
}

function clearInputs() {
  titleEl.value = '';
  authorEl.value = '';
  pagesEl.value = undefined;
  readEl.checked = false;
}

function sortByKey(array, key) {
  return array.sort((a, b) => {
    const x = a[key];
    const y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
}

function reverseSortByKey(array, key) {
  return array.sort((a, b) => {
    const x = a[key];
    const y = b[key];
    return x > y ? -1 : x < y ? 1 : 0;
  });
}

// Initialize the library book list
const lotr1 = new Book('Lord of the Rings', 'J. R. R.Tolkin', 9250, true);
const lotr2 = new Book('A Game of Thrones', 'George R. R. Martin', 694, false);
const lotr3 = new Book(
  'Harry Potter and the Deathly Hallows',
  'J. K. Rowling',
  607,
  false
);
const lotr4 = new Book('The Hunger Games', 'Suzanne Collins', 344, true);
const lotr5 = new Book('Pride and Prejudice', 'Jane Austin', 550, false);
const lotr6 = new Book('To Kill a Mockngbird', 'Harper Lee', 263, false);
const lotr14 = new Book('The Book Thief', 'Mark Zusak', 344, true);
const lotr15 = new Book('Animal Farm', 'George Orwell', 550, false);
const lotr16 = new Book('The Chronicles of Narnia', 'C. S, Lewis', 263, false);
const lotr24 = new Book('The Da Vinci Code', 'Dan Brown', 344, true);
const lotr25 = new Book('Jane Eyre', 'Charlotte Bronte', 550, false);
const lotr26 = new Book('Gone with the Wind', 'Margaret Mitchell', 263, false);
const lotr34 = new Book(
  "Alice's Advantures in Wonderland",
  'Lewis Carroll',
  344,
  true
);
const lotr35 = new Book(
  'The Little Prince',
  'Antione de Saint-Exupery',
  550,
  false
);
const lotr36 = new Book('Les Miserables', 'Victor Hugo', 263, false);
const lotr44 = new Book('Anne of Green Gables', 'L. M. Montgomery', 344, true);
const lotr45 = new Book(
  "The Hitchhiker's Guide to the Galaxy",
  'Douglas Adams',
  550,
  false
);
const lotr46 = new Book("Ender's Game", 'Orson Scott Card', 263, false);
const lotr54 = new Book("Charlotte's Web", 'E.B. White', 344, true);
const lotr55 = new Book('The Alchemist', 'Poulo Coelho', 550, false);
const lotr56 = new Book('The Catcher in the Rye', 'J.D. Salinger', 263, false);

addBookToLibrary(lotr1);
addBookToLibrary(lotr2);
addBookToLibrary(lotr3);
addBookToLibrary(lotr4);
addBookToLibrary(lotr5);
addBookToLibrary(lotr6);
addBookToLibrary(lotr14);
addBookToLibrary(lotr15);
addBookToLibrary(lotr16);
addBookToLibrary(lotr24);
addBookToLibrary(lotr25);
addBookToLibrary(lotr26);
addBookToLibrary(lotr34);
addBookToLibrary(lotr35);
addBookToLibrary(lotr36);
addBookToLibrary(lotr44);
addBookToLibrary(lotr45);
addBookToLibrary(lotr46);
addBookToLibrary(lotr54);
addBookToLibrary(lotr55);
addBookToLibrary(lotr56);

displayLibrary();

// Main functions
addBookImgEl.addEventListener('click', () => {
  clearInputs();
  formEl.classList.remove('hidden');
});

// Buttons for the book details form
formCancelBtn.addEventListener('click', (e) => {
  formEl.classList.add('hidden');
  e.preventDefault();
  clearInputs();
});

formConfirmBtn.addEventListener('click', (e) => {
  if (titleEl.value !== '' && authorEl.value !== '' && pagesEl.value >= 1) {
    const newBook = new Book(
      titleEl.value,
      authorEl.value,
      pagesEl.value,
      readEl.value
    );
    addBookToLibrary(newBook);
    addBookToDisplay(newBook);
    formEl.classList.add('hidden');
    clearLibraryDisplay();
    displayLibrary();
    e.preventDefault();
  }
});

// Buttons for the book deletion alert
deleteCancelBtn.addEventListener('click', () => {
  deleteAlertEl.classList.add('hidden');
});

deleteConfirmBtn.addEventListener('click', () => {
  deleteAlertEl.classList.add('hidden');
  library.splice(library.indexOf(bookToDelete), 1);
  bookToDelete = undefined;
  clearLibraryDisplay();
  displayLibrary();
});

// Sort buttons
let sortTitleDirection = 'ascend';
let sortAuthorDirection = 'ascend';
let sortPagesDirection = 'ascend';
let sortReadDirection = 'ascend';

sortTitleEl.addEventListener('click', () => {
  if (sortTitleDirection === 'ascend') {
    sortByKey(library, 'title');
    sortTitleDirection = 'descend';
  } else {
    reverseSortByKey(library, 'title');
    sortTitleDirection = 'ascend';
  }
  clearLibraryDisplay();
  displayLibrary();
});
sortAuthorEl.addEventListener('click', () => {
  if (sortAuthorDirection === 'ascend') {
    sortByKey(library, 'author');
    sortAuthorDirection = 'descend';
  } else {
    reverseSortByKey(library, 'author');
    sortAuthorDirection = 'ascend';
  }
  clearLibraryDisplay();
  displayLibrary();
});
sortPagesEl.addEventListener('click', () => {
  if (sortPagesDirection === 'ascend') {
    sortByKey(library, 'pages');
    sortPagesDirection = 'descend';
  } else {
    reverseSortByKey(library, 'pages');
    sortPagesDirection = 'ascend';
  }
  clearLibraryDisplay();
  displayLibrary();
});
sortReadEl.addEventListener('click', () => {
  if (sortReadDirection === 'ascend') {
    sortByKey(library, 'isRead');
    sortReadDirection = 'descend';
  } else {
    reverseSortByKey(library, 'isRead');
    sortReadDirection = 'ascend';
  }
  clearLibraryDisplay();
  displayLibrary();
});

// document.addEventListener('click', (e) => {
//   console.log(e.target.classList);
//   if (!e.target.classList.contains('popup')) {
//     formEl.classList.remove('show');
//   }
// });
