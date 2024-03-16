import ProjectsStorage from "./ProjectsStorage";
import { renderAllTasks, renderProjects, renderSelectedTasks } from "./render";

export default function UiController() {
	const addTaskBtn = document.querySelector("#add-task-btn");
	let isRenderAll = true;
	let isRenderToday = false;
	let isRenderFavorite = false;
	const allTasks = document.querySelector("#all-tasks-option");
	const toDay = document.querySelector("#today-option");
	const favorite = document.querySelector("important-option");
	const renderOptionsContainer = document.querySelector("#render-options");
	const projectTitleDisplay = document.querySelector("#project-title-display");

	allTasks.addEventListener("click", () => {
		isRenderAll = true;
		isRenderToday = false;
		isRenderFavorite = false;

		addTaskBtn.style.display = "none";
		[...renderOptionsContainer.children].forEach((element) =>
			element.classList.remove("active")
		);
		allTasks.classList.add("active");
		projectTitleDisplay.textContent = "All Tasks";
		ProjectsStorage.deselectAllProjects();
		renderProjects();
		renderAllTasks();
	});

	// projectsContainer.addEventListener("click", handleProjectSelection(e));
}

// Util function: handle project Selection
export function handleProjectSelection(e) {
	const projectsContainer = document.querySelector("#projects-container");
	const renderOptionsContainer = document.querySelector("#render-options");
	const projectTitleDisplay = document.querySelector("#project-title-display");
	const projectElement = e.currentTarget;
	const projects = ProjectsStorage.getProjects();
	const project = projects.map((proj) => {
		proj.getId() === projectElement.dataset.key
			? (proj.isSelected = true)
			: (proj.isSelected = false);
	});
	const selectedProject = projects.find(
		(proj) => proj.getId() === projectElement.dataset.key
	);
	[...projectsContainer.children].forEach((project) =>
		project.classList.remove("active")
	);
	[...renderOptionsContainer.children].forEach((element) =>
		element.classList.remove("active")
	);
	e.currentTarget.classList.add("active");
	projectTitleDisplay.textContent = selectedProject.getTitle();
	renderSelectedTasks(selectedProject);
}
