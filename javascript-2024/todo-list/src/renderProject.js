import Project from "./project";

export default function renderProject() {
	const projects = [];

	const addProjectBtn = document.querySelector("#add-project");
	const projectDialog = document.querySelector("#add-project-dialog");
	const projectDialogForm = document.querySelector("#add-project-dialog form");
	const projectTitleInput = document.querySelector("#project-title-input");
	const dialogCancel = document.querySelector("#cancel-project-modal");
	const projectsContainer = document.querySelector("#projects-container");

	addProjectBtn.addEventListener("click", () => {
		projectDialog.showModal();
	});
	dialogCancel.addEventListener("click", () => projectDialog.close());

	projectDialogForm.addEventListener("submit", () => {
		let projectTitle = projectTitleInput.value;
		let projectElement = createProjectElement(projectTitle);
		projectsContainer.appendChild(projectElement);
		projectTitleInput.value = "";

		// Add the created project to the projects array
		projects.push(new Project(projectTitle));
	});
}

function createProjectElement(title) {
	const projectWrapper = document.createElement("div");
	projectWrapper.classList.add("project_item");

	const projectTitle = document.createElement("h3");
	projectTitle.classList.add("project_name");
	projectTitle.textContent = title;

	const optionsWrapper = document.createElement("div");
	optionsWrapper.classList.add("project_options");

	const renameBtn = document.createElement("button");
	renameBtn.classList.add("project_option");
	renameBtn.textContent = "rename";

	const deleteBtn = document.createElement("button");
	deleteBtn.classList.add("project_option");
	deleteBtn.classList.add("delete");
	deleteBtn.textContent = "delete";

	optionsWrapper.appendChild(renameBtn);
	optionsWrapper.appendChild(deleteBtn);
	projectWrapper.appendChild(projectTitle);
	projectWrapper.appendChild(optionsWrapper);

	return projectWrapper;
}
