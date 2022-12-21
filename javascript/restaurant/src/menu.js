export default function renderMenu() {
	const content = document.querySelector("#content");
	const menuSection = document.createElement("section");
	menuSection.classList.add("menu");
	menuSection.id = `menu`;
	const menuHeading = document.createElement("h2");
	menuHeading.textContent = `This is our cool menu`;
	const menuContent = document.createElement("div");
	menuContent.classList.add("menu__content");

	const menuItemsCount = 6;

	for (let i = 1; i <= menuItemsCount; i++) {
		const item = document.createElement("div");
		item.classList.add("item");
		const itemName = document.createElement("h3");
		itemName.classList.add("item__name");
		itemName.textContent = `Something ${i}`;
		const itemPrice = document.createElement("span");
		itemPrice.classList.add("item__price");
		itemPrice.textContent = `$${Math.floor(
			Math.random() * (500 - 15 + 1) + 15
		)}.99`;

		item.appendChild(itemName);
		item.appendChild(itemPrice);
		menuContent.appendChild(item);
	}
	menuSection.appendChild(menuHeading);
	menuSection.appendChild(menuContent);
	content.appendChild(menuSection);
}
