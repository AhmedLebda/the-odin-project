import createProjectElement from "./createProjectElement";
import createTaskElement from "./createTaskElement";
import ProjectsStorage from "./ProjectsStorage";

// ** Function to render all projects inside the projects storage:
// -----> clear the projects container div
// -----> get the projects storage array
// -----> loop through the array and create a project element for each project obj
// -----> append each project element to the projects container div
function renderProjects() {
	const projectsContainer = document.querySelector("#projects-container");
	clearContainerElement(projectsContainer);

	const projects = ProjectsStorage.getProjects();
	projects.forEach((project) => {
		const createdProjectElement = createProjectElement(project.getTitle());
		createdProjectElement.dataset.key = project.getId();
		if (project.isSelected) {
			createdProjectElement.classList.add("active");
		}
		projectsContainer.appendChild(createdProjectElement);
	});
}

// Renders all tasks inside a selected project array
function renderSelectedTasks(selectedProjectObj) {
	const tasksContainer = document.querySelector("#tasks-wrapper");
	clearContainerElement(tasksContainer);
	selectedProjectObj.tasks.forEach((task) => {
		const createdTaskElement = createTaskElement(
			task.title,
			task.details,
			task.date
		);
		createdTaskElement.dataset.key = task.getId();
		createdTaskElement.dataset.project = selectedProjectObj.getTitle();
		tasksContainer.appendChild(createdTaskElement);
	});
}

// util function: clear all children of a container element
function clearContainerElement(containerElement) {
	while (containerElement.firstChild) {
		containerElement.firstChild.remove();
	}
}

export { renderProjects, renderSelectedTasks };
