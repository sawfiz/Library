const library = []

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    library.push(book)
}

function listBooksInLibrary() {
    library.forEach(book => {
        console.log(book);
    })
}

const lotr1 = new Book("LOTR", "Tolkin", 340)
const lotr2 = new Book("LOTR", "Tolkin", 340)
const lotr3 = new Book("LOTR", "Tolkin", 340)

addBookToLibrary(lotr1)
addBookToLibrary(lotr2)
addBookToLibrary(lotr3)

// console.log(lotr1);
// console.table(library);

listBooksInLibrary();

