import "./css/styles.css";
import renderNavbar from "./navbar";
import renderHomePage from "./homePage";
import renderMenu from "./menu";
import renderContact from "./contact";
import renderFooter from "./footer";

// Page Start layout

renderNavbar();
renderHomePage();
renderFooter();

const content = document.querySelector("#content");

// Tab logic

function main() {
	const navList = document.querySelector("#nav-list");
	[...navList.children].forEach((li) => {
		li.addEventListener("click", () => {
			const target = li.dataset.targetSection;
			if (document.querySelector(`#${target}`)) {
				return;
			} else if (target === "home") {
				content.innerHTML = "";
				renderNavbar();
				renderHomePage();
				renderFooter();
			} else if (target === "menu") {
				content.innerHTML = "";
				renderNavbar();
				renderMenu();
				renderFooter();
			} else if (target === "contact") {
				content.innerHTML = "";
				renderNavbar();
				renderContact();
				renderFooter();
			}
			console.log(target);
			main();
		});
	});
}
main();
