import "./styles/home-page.css";
import restaurantImg from "./imgs/restaurant.jpg";

export default function renderHomePage() {
	const homePageWrapper = document.createElement("section");
	homePageWrapper.classList.add("home_page");

	const title = document.createElement("h1");
	title.textContent = "Restaurant Name";
	title.classList.add("page_title");

	const imgWrapper = document.createElement("div");
	imgWrapper.classList.add("home_page__image");
	const restaurantImage = new Image();
	restaurantImage.src = restaurantImg;
	imgWrapper.appendChild(restaurantImage);

	const info = document.createElement("p");
	info.textContent = "very fancy restaurant";
	info.classList.add("home_page__info");

	homePageWrapper.appendChild(title);
	homePageWrapper.appendChild(imgWrapper);
	homePageWrapper.appendChild(info);

	return homePageWrapper;
}
