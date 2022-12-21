export default function renderContact() {
	const content = document.querySelector("#content");
	const contactSection = document.createElement("section");
	contactSection.classList.add("contact");
	contactSection.id = `contact`;
	const contactHeading = document.createElement("h2");
	contactHeading.textContent = `Our Location`;
	const location = document.createElement("span");
	location.textContent = `Somewhere Cool`;
	contactSection.appendChild(contactHeading);
	contactSection.appendChild(location);
	content.appendChild(contactSection);
}
