import ProjectsStorage from "./ProjectsStorage";
import {
	renderAllTasks,
	renderSelectedTasks,
	renderFavoriteTasks,
} from "./render";

export default function UiController() {
	const addTaskBtn = document.querySelector("#add-task-btn");
	// let isRenderAll = true;
	// let isRenderToday = false;
	// let isRenderFavorite = false;
	const allTasks = document.querySelector("#all-tasks-option");
	const toDay = document.querySelector("#today-option");
	const favorite = document.querySelector("#favorite-option");
	const renderOptionsContainer = document.querySelector("#render-options");
	const projectTitleDisplay = document.querySelector("#project-title-display");
	const projectsContainer = document.querySelector("#projects-container");

	allTasks.addEventListener("click", () => {
		// isRenderAll = true;
		// isRenderToday = false;
		// isRenderFavorite = false;

		resetSelectionStyles();
		allTasks.classList.add("active");
		projectTitleDisplay.textContent = "All Tasks";
		ProjectsStorage.deselectAllProjects();
		renderAllTasks();
	});

	favorite.addEventListener("click", () => {
		resetSelectionStyles();
		favorite.classList.add("active");
		projectTitleDisplay.textContent = "Favorites";
		ProjectsStorage.deselectAllProjects();
		renderFavoriteTasks();
	});

	// All tasks render as a default when page first loads
	allTasks.classList.add("active");
	addTaskBtn.style.display = "none";
	renderAllTasks();

	// util: resets selections styles
	function resetSelectionStyles() {
		addTaskBtn.style.display = "none";
		[...renderOptionsContainer.children].forEach((element) =>
			element.classList.remove("active")
		);
		[...projectsContainer.children].forEach((project) =>
			project.classList.remove("active")
		);
	}
}

// Util function: handle project Selection
export function handleProjectSelection(e) {
	const projectsContainer = document.querySelector("#projects-container");
	const renderOptionsContainer = document.querySelector("#render-options");
	const projectTitleDisplay = document.querySelector("#project-title-display");
	const addTaskBtn = document.querySelector("#add-task-btn");
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
	addTaskBtn.style.display = "block";
	e.currentTarget.classList.add("active");
	projectTitleDisplay.textContent = selectedProject.getTitle();
	renderSelectedTasks(selectedProject);
}
