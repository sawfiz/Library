const tableBodyEl = document.querySelector("tbody");

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

function changeReadStatus(book) {
    book.isRead = book.isRead === true ? false : true;
}

function listBooksInLibrary() {
    let index = 0;
    library.forEach((book) => {
        console.log(book);
        index++;
        const bookRow = document.createElement("tr");
        const bookIndex = document.createElement("td");
        bookIndex.innerText = index;
        bookRow.appendChild(bookIndex);
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
        bookRead.innerText = book.isRead;
        bookRow.appendChild(bookRead);
        tableBodyEl.appendChild(bookRow);
    });
}

function clearBooksList() {
    tableBodyEl.innerHTML = "";
    const headerRow = document.createElement("tr");
    headerRow.innerHTML =
        "<tr><th>Index</th><th>Title</th><th>Author</th><th>Pages</th><th>Read</th></tr>";
    tableBodyEl.appendChild(headerRow);
}

const lotr1 = new Book("LOTR1", "Tolkin", 344, false);
const lotr2 = new Book("LOTR2", "Tolkin", 550, false);
const lotr3 = new Book("LOTR3", "Tolkin", 263, false);

addBookToLibrary(lotr1);
addBookToLibrary(lotr2);
addBookToLibrary(lotr3);

listBooksInLibrary();
changeReadStatus(lotr1);

clearBooksList();

listBooksInLibrary();
console.table(library);
