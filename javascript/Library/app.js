//variables

let myLibrary = [];

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const bookStatus = document.querySelector("#status");
const addBookBtn = document.querySelector("#add-book");
const formWrapper = document.querySelector(".add-form-wrapper");
const addBookInputs = document.querySelectorAll(".add-form input");
const addBookForm = document.querySelector(".add-form");
const mainContent = document.querySelector("main");

class Book {
  constructor(title, author, pages, bookStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.bookStatus = bookStatus;
  }

  static addBookToLibrary() {
    myLibrary.push(
      new Book(title.value, author.value, pages.value, bookStatus.checked)
    );
  }

  changeReadStatus() {
    this.bookStatus ? (this.bookStatus = false) : (this.bookStatus = true);
  }
}

// Function: Display books in library

function displayBooks(library) {
  while (mainContent.firstChild) {
    mainContent.firstChild.remove();
  }
  for (let [index, obj] of library.entries()) {
    const book = document.createElement("section");
    book.setAttribute("data-order", index);
    book.classList.add("book");
    book.innerHTML = `
    <h2><a href="#">${obj.title}</a></h2>
    <p>Author: <a href="#">${obj.author}</a></p>
    <p>Pages: <a href="#">${obj.pages}</a></p>
    <div class="btns-wrapper">
      <button class="read-status">
      ${obj.bookStatus ? "Completed" : "Not Read"}
      </button>
      <button class="remove-book">Remove Book</button>
    </div>
    `;
    mainContent.appendChild(book);
  }
}

// -----> Event Listeners

addBookBtn.addEventListener("click", () => {
  formWrapper.classList.toggle("show");

  // Focusing the first field
  title.focus();

  // Clearing fields every time user adds a book
  addBookInputs.forEach((input) => {
    if (input.type === "checkbox") {
      input.checked = false;
    } else {
      input.value = "";
    }
  });
});

// Adding books to library

addBookForm.addEventListener("submit", (e) => {
  // Prevent form from submitting and closing the form
  e.preventDefault();
  formWrapper.classList.remove("show");

  Book.addBookToLibrary();
  displayBooks(myLibrary);
});


// Changing read status and removing books from library

mainContent.addEventListener("click", (e) => {
  if (e.target.classList.contains("read-status")) {
    myLibrary[e.target.parentNode.parentNode.dataset.order].changeReadStatus();
    displayBooks(myLibrary);
  } else if (e.target.classList.contains("remove-book")) {
    myLibrary.splice(e.target.parentNode.parentNode.dataset.order, 1);
    displayBooks(myLibrary);
  }
});
