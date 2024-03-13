import "./about.css";

export default function renderAboutPage() {
	const aboutWrapper = document.createElement("section");
	aboutWrapper.classList.add("about_page");

	const title = document.createElement("h2");
	title.classList.add("title");
	title.textContent = "About us";

	const info = document.createElement("p");
	info.classList.add("info");
	info.textContent =
		"we are a very fancy restaurant which serves very delicious food";

	aboutWrapper.appendChild(title);
	aboutWrapper.appendChild(info);

	return aboutWrapper;
}
