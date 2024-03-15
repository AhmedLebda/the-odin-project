import Project from "./project";
import ProjectsStorage from "./ProjectsStorage";
import { renderProjects } from "./render";

export default function projectsController() {
	const addProjectBtn = document.querySelector("#add-project");
	const projectDialog = document.querySelector("#add-project-dialog");
	const projectDialogForm = document.querySelector("#add-project-dialog form");
	const projectTitleInput = document.querySelector("#project-title-input");
	const projectDialogCancel = document.querySelector(
		"[data-action='cancel-project-add']"
	);
	const projectsContainer = document.querySelector("#projects-container");

	// Show the add project modal when (add project) button is clicked
	addProjectBtn.addEventListener("click", () => {
		projectDialog.showModal();
	});

	// Cancel the add project modal when (cancel) button is clicked =
	projectDialogCancel.addEventListener("click", () => projectDialog.close());

	// ** When add project modal form is submitted:
	//-----> create a new project object
	//-----> add this new project object to the projects storage
	//-----> run a function to render all projects inside the projects storage
	//-----> clear the add project modal input value
	projectDialogForm.addEventListener("submit", () => {
		const projectTitle = projectTitleInput.value;
		const projectObj = new Project(projectTitle);
		ProjectsStorage.addProject(projectObj);
		renderProjects();
		projectTitleInput.value = null;
	});

	// ** when projects container div is clicked:
	// -----> check the id of the target
	// -----> if (delete) >> run the handle delete function
	// -----> if (rename) >> run the handle rename function
	projectsContainer.addEventListener("click", (e) => {
		const clickedElement = e.target.dataset.action;
		if (clickedElement === "delete-project") {
			handleProjectDelete(e);
		}
		if (clickedElement === "rename-project") {
			handleProjectRename(e);
		}
		if (e.target.classList.contains("project_name")) {
			handleProjectSelection(e);
		}
	});

	// Create Two default project when page loads for the first time
	createDefaultProject("project One");
	createDefaultProject("project Two");

	// Call render projects function once to render all defaults when page loads for the first time
	renderProjects();
}

// util function: create default projects
function createDefaultProject(title) {
	const projOne = new Project(title);
	ProjectsStorage.addProject(projOne);
}

// util function: handle project delete:
// -----> get the parent node key
// -----> check the projects storage for an object with the same key and delete that obj
// -----> run render projects functions
function handleProjectDelete(e) {
	const parentKey = e.target.parentElement.parentElement.dataset.key;
	const projects = ProjectsStorage.getProjects();
	ProjectsStorage.setProjects(
		projects.filter((project) => project.getId() !== parentKey)
	);
	renderProjects();
}

// util Function: handle project rename:
function handleProjectRename(e) {
	const projectRenameModal = document.querySelector("#rename-project-dialog");
	const projectRenameForm = document.querySelector(
		"#rename-project-dialog form"
	);
	const projectRenameCancel = document.querySelector(
		"[data-action='cancel-project-rename']"
	);
	const projectRenameInput = document.querySelector("#project-rename-input");
	const parentKey = e.target.parentElement.parentElement.dataset.key;
	const projects = ProjectsStorage.getProjects();
	const targetProject = projects.find(
		(project) => project.getId() === parentKey
	);

	projectRenameModal.showModal();
	projectRenameCancel.addEventListener("click", () =>
		projectRenameModal.close()
	);
	projectRenameForm.addEventListener("submit", () => {
		let newTitle = projectRenameInput.value;
		targetProject.setTitle(newTitle);
		renderProjects();
	});
	projectRenameInput.value = null;
}

// Util function: handle project Selection
function handleProjectSelection(e) {
	const projectElement = e.target.parentElement;
	const projects = ProjectsStorage.getProjects();
	const project = projects.map((proj) => {
		proj.getId() === projectElement.dataset.key
			? (proj.isSelected = true)
			: (proj.isSelected = false);
	});
	renderProjects();
}
