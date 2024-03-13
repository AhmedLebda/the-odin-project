import "./main.css";
import renderHomePage from "./home-page/home-page";
import renderMenuPage from "./menu-page/menu";
import renderAboutPage from "./about-page/about";

const content = document.querySelector("#content");
const navButtons = document.querySelectorAll(".nav_btn");

// content.appendChild(renderHomePage());
content.appendChild(renderHomePage());

navButtons.forEach((button) => {
	button.addEventListener("click", (e) => {
		switch (e.target.id) {
			case "home":
				content.firstChild.remove();
				content.appendChild(renderHomePage());
				break;
			case "menu":
				content.firstChild.remove();
				content.appendChild(renderMenuPage());
				break;
			case "about":
				content.firstChild.remove();
				content.appendChild(renderAboutPage());
				break;
		}
	});
});
