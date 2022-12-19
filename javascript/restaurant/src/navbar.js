export default function renderNavbar() {
	const content = document.querySelector("#content");
	const navLinks = ["Home", "Menu", "Contact"];
	const nav = document.createElement("nav");
	const ul = document.createElement("ul");
	ul.id = "nav-list";

	for (let link of navLinks) {
		const li = document.createElement("li");
		const a = document.createElement("a");
		a.classList.add("nav__item");
		a.textContent = link;
		li.appendChild(a);
		ul.appendChild(li);
	}
	nav.appendChild(ul);
	content.appendChild(nav);
}
