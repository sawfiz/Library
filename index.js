const tableBodyEl = document.querySelector("tbody");
const newBookTitleEl = document.querySelector("#title");
const newBookAuthorEl = document.querySelector("#author");
const newBookPagesEl = document.querySelector("#pages");
const newBookReadEl = document.querySelector("#read");
const addBookBtnEl = document.querySelector("#addBookBtn");
const addBookImgEl = document.querySelector(".addBookImg");
const formContainerEl = document.querySelector(".form-container");
const cancelBtnEl = document.querySelector("#cancelBtn")

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
    bookReadImg.src = book.isRead
        ? "images/icons8-checked-checkbox-96.png"
        : "images/icons8-process-96.png";
    bookRow.appendChild(bookRead);

    // Toggle book read status and icon image when the icon is clicked on
    bookReadImg.addEventListener("click", () => {
        bookReadImg.src = book.isRead
            ? "images/icons8-process-96.png"
            : "images/icons8-checked-checkbox-96.png";
        book.isRead = book.isRead === true ? false : true;
    });

    const bookEdit = document.createElement("td");
    const bookEditImg = document.createElement("img");
    bookEditImg.src = "images/icons8-compose-96.png";
    bookEdit.appendChild(bookEditImg);
    bookRow.appendChild(bookEdit);
    bookEditImg.addEventListener("click", () => {
        formContainerEl.classList.add("show");
        console.log(book);

        newBookTitleEl.value = book.title;
        newBookAuthorEl.value = book.author;
        newBookPagesEl.value = book.pages;
        newBookReadEl.checked = book.checked;

        library.splice(library.indexOf(book), 1);
    });

    const bookRemove = document.createElement("td");
    const bookRemoveImg = document.createElement("img");
    bookRemoveImg.src = "images/remove.png";
    bookRemove.appendChild(bookRemoveImg);
    bookRow.appendChild(bookRemove);

    bookRemoveImg.addEventListener("click", () => {
        library.splice(library.indexOf(book), 1);
        clearLibraryDisplay();
        displayLibrary();
    });

    tableBodyEl.appendChild(bookRow);
}

function displayLibrary() {
    sortByKey(library, "title");
    library.forEach((book) => {
        addBookToDisplay(book);
    });
}

function sortByKey(array, key) {
    return array.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        return x < y ? -1 : x > y ? 1 : 0;
    });
}

function clearLibraryDisplay() {
    tableBodyEl.innerHTML = "";
    const headerRow = document.createElement("tr");
    tableBodyEl.appendChild(headerRow);
}

function clearInputs() {
    newBookTitleEl.value = "";
    newBookAuthorEl.value = "";
    newBookPagesEl.value = undefined;
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
const lotr14 = new Book("LOTR1", "Tolkin", 344, true);
const lotr15 = new Book("LOTR2", "Tolkin", 550, false);
const lotr16 = new Book("LOTR3", "Tolkin", 263, false);
const lotr24 = new Book("LOTR1", "Tolkin", 344, true);
const lotr25 = new Book("LOTR2", "Tolkin", 550, false);
const lotr26 = new Book("LOTR3", "Tolkin", 263, false);
const lotr34 = new Book("LOTR1", "Tolkin", 344, true);
const lotr35 = new Book("LOTR2", "Tolkin", 550, false);
const lotr36 = new Book("LOTR3", "Tolkin", 263, false);
const lotr44 = new Book("LOTR1", "Tolkin", 344, true);
const lotr45 = new Book("LOTR2", "Tolkin", 550, false);
const lotr46 = new Book("LOTR3", "Tolkin", 263, false);
const lotr54 = new Book("LOTR1", "Tolkin", 344, true);
const lotr55 = new Book("LOTR2", "Tolkin", 550, false);
const lotr56 = new Book("LOTR3", "Tolkin", 263, false);

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
            newBookReadEl.value
        );
        addBookToLibrary(newBook);
        addBookToDisplay(newBook);
        clearInputs();
        formContainerEl.classList.remove("show");
        clearLibraryDisplay();
        displayLibrary();
    } else {
        e.preventDefault();
    }
});

cancelBtnEl.addEventListener("click", () => {
    formContainerEl.classList.remove("show");
    clearInputs();
})

addBookImgEl.addEventListener("click", () => {
    formContainerEl.classList.add("show");
});
