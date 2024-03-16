import ProjectsStorage from "./ProjectsStorage";
import { renderAllTasks, renderProjects } from "./render";

export default function UiController() {
	// Rendering Variables
	let isRenderAll = true;
	let isRenderToday = false;
	let isRenderFavorite = false;
	const allTasks = document.querySelector("#all-tasks-option");
	const toDay = document.querySelector("#today-option");
	const favorite = document.querySelector("important-option");

	allTasks.addEventListener("click", () => {
		isRenderAll = true;
		isRenderToday = false;
		isRenderFavorite = false;
		ProjectsStorage.deselectAllProjects();
		renderProjects();
		renderAllTasks();
	});
}
