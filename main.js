const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// PLACEHOLDER, WILL BE REMOVED.

let book1 = new Book("book 1", "author 1", 12, false);
let book2 = new Book("book 2", "author 2", 22, false);
let book3 = new Book("book 3", "author 3", 32, true);
let book4 = new Book("book 4", "author 4", 42, false);
let book5 = new Book("book 5", "author 5", 52, true);

myLibrary.push(book1)
myLibrary.push(book2)
myLibrary.push(book3)
myLibrary.push(book4)
myLibrary.push(book5)

function addBookToLibrary(book) {
    myLibrary.push(book)
}