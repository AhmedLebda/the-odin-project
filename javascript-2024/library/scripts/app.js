"use strict";

const myLibrary = [];
const addBookBtn = document.querySelector("#add-book-btn");
const dialog = document.querySelector("dialog");

function Book(name, author, pages, isRead) {
	this.name = name;
	this.author = author;
	this.pages = pages;
	this.isRead = isRead;
}

function addBookToLibrary() {
	let bookName = "cool book";
	let bookAuthor = "brilliant author";
	let bookPages = "100";
	let isRead = false;
	myLibrary.push(new Book(bookName, bookAuthor, bookPages, isRead));
}

addBookToLibrary();
console.log(myLibrary);

//  function that loops through the array and displays each book on the page
// Add a “NEW BOOK” button that brings up a form as a modal
// Add a button on each book’s display to remove the book from the library
// Add a button on each book’s display to change its read status

addBookBtn.addEventListener("click", () => dialog.showModal());
