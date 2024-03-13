import "./menu.css";
import pizzaImg from "./imgs/pizza.jpg";
import burgerImg from "./imgs/burger.jpg";

export default function renderMenuPage() {
	const menuWrapper = document.createElement("section");
	menuWrapper.classList.add("menu_page");

	for (let i = 0; i < 3; i++) {
		menuWrapper.appendChild(
			createMenuItem("Pizza", pizzaImg, "very delicious pizza")
		);
		menuWrapper.appendChild(
			createMenuItem("Burger", burgerImg, "very delicious burger")
		);
	}

	return menuWrapper;
}

function createMenuItem(itemName, itemImg, itemInfo) {
	const itemWrapper = document.createElement("div");
	itemWrapper.classList.add("menu_item");

	const name = document.createElement("h3");
	name.textContent = itemName;
	name.classList.add("item_title");

	const imgWrapper = document.createElement("div");
	imgWrapper.classList.add("item_img_wrapper");
	const img = new Image();
	img.src = itemImg;
	imgWrapper.appendChild(img);

	const info = document.createElement("p");
	info.textContent = itemInfo;
	info.classList.add("item_info");

	itemWrapper.appendChild(name);
	itemWrapper.appendChild(imgWrapper);
	itemWrapper.appendChild(info);

	return itemWrapper;
}
