import ProjectsStorage from "./ProjectsStorage";
import {
	renderAllTasks,
	renderProjectTasks,
	renderFavoriteTasks,
	renderTodayTasks,
} from "./render";

export default function UiController() {
	const addTaskBtn = document.querySelector("#add-task-btn");
	const allTasks = document.querySelector("#all-tasks-option");
	const toDay = document.querySelector("#today-option");
	const favorite = document.querySelector("#favorite-option");
	const renderOptionsContainer = document.querySelector("#render-options");
	const projectTitleDisplay = document.querySelector("#project-title-display");
	const projectsContainer = document.querySelector("#projects-container");

	allTasks.addEventListener("click", () => {
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

	toDay.addEventListener("click", () => {
		resetSelectionStyles();
		toDay.classList.add("active");
		projectTitleDisplay.textContent = "Today's Tasks";
		ProjectsStorage.deselectAllProjects();
		renderTodayTasks();
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

// handle project Selection
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
	renderProjectTasks(selectedProject);
}
