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
});
dialogCancelBtn.addEventListener("click", () => dialog.close());
