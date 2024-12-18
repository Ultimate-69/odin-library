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

class Book {
    constructor(name, author, pages, read) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

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
                <button class="blue-button markAsRead" onclick="toggleRead(${index})">Toggle Read</button>
            </div>
        `
        }
        else {
            html += 
            `
                <p>Not Read</p>
                <button class="blue-button delete" onclick="deleteBook(${index})">Delete</button>
                <button class="blue-button markAsRead" onclick="toggleRead(${index})">Toggle Read</button>
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

function toggleRead(index) {
    myLibrary[index].read = !myLibrary[index].read;
    renderLibraryHtml();
}