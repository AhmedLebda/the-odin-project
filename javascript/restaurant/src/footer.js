export default function renderFooter() {
	const content = document.querySelector("#content");
	const footer = document.createElement("footer");
	const author = document.createElement("h3");
	author.textContent = `Coded by `;
	const authorContact = document.createElement("a");
	authorContact.textContent = `Ahmed Lebda`;
	authorContact.href = `https://github.com/AhmedLebda`;
	author.appendChild(authorContact);
	footer.appendChild(author);
	content.appendChild(footer);
}
