import Project from "./project";
import ProjectsStorage from "./ProjectsStorage";
import { renderProjects, renderAllTasks } from "./render";

export default function projectsController() {
	const addProjectBtn = document.querySelector("#add-project");
	const projectDialog = document.querySelector("#add-project-dialog");
	const projectDialogForm = document.querySelector("#add-project-dialog form");
	const projectTitleInput = document.querySelector("#project-title-input");
	const projectDialogCancel = document.querySelector(
		"[data-action='cancel-project-add']"
	);
	const projectsContainer = document.querySelector("#projects-container");

	// Show modal to add a new project and resets the form
	addProjectBtn.addEventListener("click", () => {
		projectDialog.showModal();
		projectTitleInput.value = null;
	});

	// Close add new project modal
	projectDialogCancel.addEventListener("click", () => projectDialog.close());

	// creates a new project obj and add it to projects storage then renders all projects
	projectDialogForm.addEventListener("submit", () => {
		const projectTitle = projectTitleInput.value;
		const projectObj = new Project(projectTitle);
		ProjectsStorage.addProject(projectObj);
		renderProjects();
	});

	// Add events to project's Delete and Edit buttons
	projectsContainer.addEventListener("click", (e) => {
		const clickedElement = e.target.dataset.action;
		if (clickedElement === "delete-project") {
			handleProjectDelete(e);
		}
		if (clickedElement === "rename-project") {
			handleProjectRename(e);
		}
	});

	// Create Two default project when page loads for the first time
	createDefaultProject("project One");
	createDefaultProject("project Two");

	// Call render projects function once to render all defaults when page loads for the first time
	renderProjects();
}

// util: creates default projects
function createDefaultProject(title) {
	const projOne = new Project(title);
	ProjectsStorage.addProject(projOne);
}

// util: handle project delete:
function handleProjectDelete(e) {
	const projectTitleDisplay = document.querySelector("#project-title-display");
	const addTaskBtn = document.querySelector("#add-task-btn");
	const allTasks = document.querySelector("#all-tasks-option");
	const projectElementContainer = e.target.parentElement.parentElement;

	// Delete the project from storage and delete the project Element
	ProjectsStorage.deleteProject(projectElementContainer.dataset.key);
	projectElementContainer.remove();

	projectTitleDisplay.textContent = "All Tasks";
	allTasks.classList.add("active");
	addTaskBtn.style.display = "none";
	renderAllTasks();
}

// util: handle project rename:
function handleProjectRename(e) {
	const projectTitleDisplay = document.querySelector("#project-title-display");
	const projectRenameModal = document.querySelector("#rename-project-dialog");
	const projectRenameForm = document.querySelector(
		"#rename-project-dialog form"
	);
	const projectRenameCancel = document.querySelector(
		"[data-action='cancel-project-rename']"
	);
	const projectRenameInput = document.querySelector("#project-rename-input");
	const projectElementContainer = e.target.parentElement.parentElement;
	const projectTitle = projectElementContainer.querySelector("h3");

	projectRenameModal.showModal();
	projectRenameInput.value = null;

	projectRenameCancel.addEventListener("click", () =>
		projectRenameModal.close()
	);

	projectRenameForm.addEventListener("submit", () => {
		let newTitle = projectRenameInput.value;
		ProjectsStorage.renameProject(
			projectElementContainer.dataset.key,
			newTitle
		);

		projectTitle.textContent = newTitle;
		projectTitleDisplay.textContent = newTitle;
	});
}
