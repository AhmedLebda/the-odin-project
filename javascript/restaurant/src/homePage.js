export default function renderHomePage() {
	const content = document.querySelector("#content");
	const homePage = document.createElement("section");
	homePage.classList.add("home__page");
	const h1 = document.createElement("h1");
	h1.textContent = "Cafe Rosa";
	const p = document.createElement("p");
	p.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
    dolores adipisci expedita architecto neque voluptates, fugit modi
    quibusdam soluta ullam in, animi quae minus odit delectus quas quos.
    Dolorum`;

	homePage.appendChild(h1);
	homePage.appendChild(p);
	content.appendChild(homePage);
}
