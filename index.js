const tableBodyEl = document.querySelector("tbody");
const newBookTitleEl = document.querySelector("#title");
const newBookAuthorEl = document.querySelector("#author");
const newBookPagesEl = document.querySelector("#pages");
const newBookReadEl = document.querySelector("#read");
const addBookBtnEl = document.querySelector("#addBookBtn");

const library = [];

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
    const bookRow = document.createElement("tr");

    const bookTitle = document.createElement("td");
    bookTitle.innerText = book.title;
    bookRow.appendChild(bookTitle);

    const bookAuthor = document.createElement("td");
    bookAuthor.innerText = book.author;
    bookRow.appendChild(bookAuthor);

    const bookPages = document.createElement("td");
    bookPages.innerText = book.pages;
    bookRow.appendChild(bookPages);

    const bookRead = document.createElement("td");
    const bookReadImg = document.createElement("img");
    bookRead.appendChild(bookReadImg);
    bookReadImg.src = book.isRead ? "images/check.svg" : "images/uncheck.svg";
    bookRow.appendChild(bookRead);

    // Toggle book read status and icon image when the icon is clicked on
    bookReadImg.addEventListener("click", () => {
        bookReadImg.src = book.isRead
            ? "images/uncheck.svg"
            : "images/check.svg";
        book.isRead = book.isRead === true ? false : true;
    });

    const bookRemove = document.createElement("td");
    const bookRemoveImg = document.createElement("img");
    bookRemoveImg.src = "images/remove.png";
    bookRemove.appendChild(bookRemoveImg);
    bookRow.appendChild(bookRemove);

    bookRemoveImg.addEventListener("click", () => {
        library.splice(library.indexOf(book), 1)
        clearLibraryDisplay();
        displayLibrary();
    })

    tableBodyEl.appendChild(bookRow);
}

function displayLibrary() {
    library.forEach((book) => {
        addBookToDisplay(book);
    });
}

function clearLibraryDisplay() {
    tableBodyEl.innerHTML = "";
    const headerRow = document.createElement("tr");
    headerRow.innerHTML =
        "<tr><th>Title</th><th>Author</th><th>Pages</th><th>Read</th><th>Remove</th></tr>";
    tableBodyEl.appendChild(headerRow);
}

function clearInputs() {
    newBookTitleEl.value = "";
    newBookAuthorEl.value = "";
    newBookPagesEl.value = 0;
    newBookReadEl.checked = false;
}

// main program

const lotr1 = new Book("Lord of the Rings", "J. R. R.Tolkin", 9250, true);
const lotr2 = new Book("A Game of Thrones", "George R. R. Martin", 694, false);
const lotr3 = new Book(
    "Harry Potter and the Deathly Hallows",
    "J. K. Rowling",
    607,
    false
);
const lotr4 = new Book("LOTR1", "Tolkin", 344, true);
const lotr5 = new Book("LOTR2", "Tolkin", 550, false);
const lotr6 = new Book("LOTR3", "Tolkin", 263, false);

addBookToLibrary(lotr1);
addBookToLibrary(lotr2);
addBookToLibrary(lotr3);
addBookToLibrary(lotr4);
addBookToLibrary(lotr5);
addBookToLibrary(lotr6);
clearLibraryDisplay();
displayLibrary();
console.table(library);

addBookBtnEl.addEventListener("click", (e) => {
    if (
        newBookTitleEl.value !== "" &&
        newBookAuthorEl.value !== "" &&
        newBookPagesEl.value >= 1
    ) {
        const newBook = new Book(
            newBookTitleEl.value,
            newBookAuthorEl.value,
            newBookPagesEl.value,
            newBookReadEl.checked
        );
        addBookToLibrary(newBook);
        addBookToDisplay(newBook);
        clearInputs();
    } else {
        e.preventDefault();
    }
});
