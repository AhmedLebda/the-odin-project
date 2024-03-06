"use strict";

const myLibrary = [];
const addBookBtn = document.querySelector("#add-book-btn");
// Dialog Variables
const dialog = document.querySelector("dialog");
const dialogForm = document.querySelector("dialog form");
const dialogCancelBtn = document.querySelector("#dialog-cancel");
const bookTitle = document.querySelector("#book-title-input");
const bookAuthor = document.querySelector("#book-author-input");
const bookPages = document.querySelector("#book-pages-input");
const bookReadStatus = document.querySelector("#read-status-input");

const booksWrapper = document.querySelector(".books__wrapper");

function Book(title, author, pages, isRead) {
	this.id = myLibrary.length;
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead = false) {
	myLibrary.push(new Book(title, author, pages, isRead));
}
function resetDialogForm() {
	bookTitle.value = "";
	bookAuthor.value = "";
	bookPages.value = "";
	bookReadStatus.checked = false;
}

// function createBookElement(title, author, pages, isRead) {
// 	const book = document.createElement("div");
// 	const bookTitle = document.createElement("h3");
// 	const bookAuthor = document.createElement("p");
// 	const bookPages = document.createElement("p");
// 	const bookControls = document.createElement("div");
// 	const readOptionWrapper = document.createElement("div");
// 	const readOptionLabel = document.createElement("label");
// 	const readInputWrapper = document.createElement("div");
// 	const readOptionInput = document.createElement("input");
// 	const deleteBookBtn = document.createElement("button");
// 	bookTitle.textContent = title;
// 	bookAuthor.textContent = author;
// 	bookPages.textContent = `${pages} pages`;
// 	readOptionLabel.textContent = isRead ? "Read" : "Not Read";
// 	readOptionInput.checked = isRead;
// 	deleteBookBtn.textContent = "Delete";
// 	book.classList.add("book");
// 	bookTitle.classList.add("book__title");
// 	bookAuthor.classList.add("book__author");
// 	bookPages.classList.add("book__pages");
// 	bookControls.classList.add("book__controls");
// 	readOptionWrapper.classList.add("read__option__wrapper");
// 	readInputWrapper.classList.add("read__input__wrapper");
// 	readOptionInput.classList.add("read__status");
// 	deleteBookBtn.classList.add("delete__book");
// 	readOptionInput.setAttribute("type", "checkbox");
// 	readOptionInput.setAttribute("name", "read-status");
// 	book.appendChild(bookTitle);
// 	book.appendChild(bookAuthor);
// 	book.appendChild(bookPages);
// 	book.appendChild(bookControls);
// 	bookControls.appendChild(readOptionWrapper);
// 	readOptionWrapper.appendChild(readOptionLabel);
// 	readOptionWrapper.appendChild(readInputWrapper);
// 	readInputWrapper.appendChild(readOptionInput);
// 	bookControls.appendChild(deleteBookBtn);
// 	booksWrapper.appendChild(book);
// }

function createBookElement(title, author, pages, isRead) {
	const book = document.createElement("div");
	book.classList.add("book");
	book.innerHTML = `<h3 class="book__title">${title}</h3>
	<p class="book__author">${author}</p>
	<p class="book__pages">${pages} pages</p>
	<div class="book__controls">
		<div class="read__option__wrapper">
			<label for="read-status">${isRead ? "read" : "not read"}</label>
			<div class="read__input__wrapper">
				<input
					type="checkbox"
					class="read__status"
					name="read-status"
					id="read-status"
				/>
			</div>
		</div>
		<button class="delete__book">delete</button>
	</div>`;
	booksWrapper.appendChild(book);
}

addBookBtn.addEventListener("click", () => dialog.showModal());

dialogForm.addEventListener("submit", (e) => {
	e.preventDefault();

	addBookToLibrary(
		bookTitle.value,
		bookAuthor.value,
		bookPages.value,
		bookReadStatus.checked
	);
	resetDialogForm();
	dialog.close();

	const createdBook = myLibrary[myLibrary.length - 1];
	createBookElement(
		createdBook.title,
		createdBook.author,
		createdBook.pages,
		createdBook.isRead
	);
});
dialogCancelBtn.addEventListener("click", () => dialog.close());
