const myLibrary = [];

const newButton = document.querySelector('#new');
const newBookModal = document.querySelector('#new-book');
const submit = document.querySelector('#submit');
const cancel = document.querySelector('#cancel');

const bookName = document.querySelector('#book-name')
const authorName = document.querySelector('#author-name')
const pages = document.querySelector('#pages')
const read = document.querySelector('#read')
const bookContainer = document.querySelector(".books");

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

renderLibraryHtml();


function addBookToLibrary(book) {
    myLibrary.push(book)
}

newButton.addEventListener('click', () => {
    newBookModal.showModal();
});

submit.addEventListener('click', (event) => {
    event.preventDefault();
    newBookModal.close();
    console.log('hey!');
    let tempBook = new Book(bookName.value, authorName.value, pages.value, read.checked === true);
    addBookToLibrary(tempBook);
    renderLibraryHtml();
})

cancel.addEventListener('click', () => {
    newBookModal.close();
    bookName.value = '';
    authorName.value = '';
    pages.value = 1;
    read.checked = false;
});


function renderLibraryHtml() {
    let htmlToAdd = '';
    myLibrary.forEach((value, index) => {
        let html = 
        `
        <div data-id="${index}" class="book">
            <p>${value.name}</p>
            <p>By ${value.author}</p>
            <p>${value.pages} Pages</p>
            <hr>
        `
    
        if (value.read) {
            html += 
            `
                <p>Read</p>
                <button class="blue-button delete" onclick="deleteBook(${index})">Delete</button>
            </div>
        `
        }
        else {
            html += 
            `
                <p>Not Read</p>
                <button class="blue-button delete" onclick="deleteBook(${index})">Delete</button>
            </div>
            `
        }
    
        htmlToAdd += html;
    })
    bookContainer.innerHTML = htmlToAdd;
}

function deleteBook(index) {
    const books = document.querySelectorAll('.book');
    books.forEach((book) => {
        if (book.dataset.id == index) {
            myLibrary.splice(index, 1);
            renderLibraryHtml();
        }
    });
}