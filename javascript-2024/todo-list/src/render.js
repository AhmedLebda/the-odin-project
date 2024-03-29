import createProjectElement from "./createProjectElement";
import createTaskElement from "./createTaskElement";
import ProjectsStorage from "./ProjectsStorage";
import { handleProjectSelection } from "./UiController";

//  render all projects inside the projects storage:
function renderProjects() {
	const projectsContainer = document.querySelector("#projects-container");
	clearContainerElement(projectsContainer);

	const projects = ProjectsStorage.getProjects();
	projects.forEach((project) => {
		const createdProjectElement = createProjectElement(
			project.getTitle(),
			project.isSelected
		);
		createdProjectElement.dataset.key = project.getId();
		createdProjectElement.addEventListener("click", handleProjectSelection);
		projectsContainer.appendChild(createdProjectElement);
	});
}

// Renders all tasks inside a selected project array
function renderProjectTasks(selectedProjectObj) {
	const tasksContainer = document.querySelector("#tasks-wrapper");
	clearContainerElement(tasksContainer);
	selectedProjectObj.tasks.forEach((task) => {
		const createdTaskElement = createTaskElement(
			task.title,
			task.details,
			task.date,
			task.favorite,
			task.isComplete
		);
		createdTaskElement.dataset.key = task.getId();
		createdTaskElement.dataset.project = selectedProjectObj.getTitle();
		tasksContainer.appendChild(createdTaskElement);
	});
}

// Renders all tasks inside all projects
function renderAllTasks() {
	const tasksContainer = document.querySelector("#tasks-wrapper");
	clearContainerElement(tasksContainer);
	const projects = ProjectsStorage.getProjects();
	projects.forEach((project) => {
		project.tasks.forEach((task) => {
			const createdTaskElement = createTaskElement(
				task.title,
				task.details,
				task.date,
				task.favorite,
				task.isComplete
			);
			createdTaskElement.dataset.key = task.getId();
			createdTaskElement.dataset.project = project.getTitle();
			tasksContainer.appendChild(createdTaskElement);
		});
	});
}
// renders favorite tasks
function renderFavoriteTasks() {
	const tasksContainer = document.querySelector("#tasks-wrapper");
	clearContainerElement(tasksContainer);
	const projects = ProjectsStorage.getProjects();
	projects.forEach((project) => {
		project.tasks.forEach((task) => {
			if (task.favorite) {
				const createdTaskElement = createTaskElement(
					task.title,
					task.details,
					task.date,
					task.favorite,
					task.isComplete
				);
				createdTaskElement.dataset.key = task.getId();
				createdTaskElement.dataset.project = project.getTitle();
				tasksContainer.appendChild(createdTaskElement);
			}
		});
	});
}

function renderTodayTasks() {
	const tasksContainer = document.querySelector("#tasks-wrapper");
	clearContainerElement(tasksContainer);
	const projects = ProjectsStorage.getProjects();
	const today = new Date().toLocaleDateString();

	projects.forEach((project) => {
		project.tasks.forEach((task) => {
			const taskDueDate = new Date(task.date).toLocaleDateString();
			if (taskDueDate === today) {
				const createdTaskElement = createTaskElement(
					task.title,
					task.details,
					task.date,
					task.favorite,
					task.isComplete
				);
				createdTaskElement.dataset.key = task.getId();
				createdTaskElement.dataset.project = project.getTitle();
				tasksContainer.appendChild(createdTaskElement);
			}
		});
	});
}

// util function: clear all children of a container element
function clearContainerElement(containerElement) {
	while (containerElement.firstChild) {
		containerElement.firstChild.remove();
	}
}

export {
	renderProjects,
	renderProjectTasks,
	renderAllTasks,
	renderFavoriteTasks,
	renderTodayTasks,
};
