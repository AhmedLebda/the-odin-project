import "./main.css";
import Project from "./project";
import createProjectElement from "./createProjectElement";
import createTaskElement from "./createTaskElement";

const projects = [];
projectController();
taskController();

function projectController() {
	const addProjectBtn = document.querySelector("#add-project");
	const projectDialog = document.querySelector("#add-project-dialog");
	const projectDialogForm = document.querySelector("#add-project-dialog form");
	const projectTitleInput = document.querySelector("#project-title-input");
	const projectDialogCancel = document.querySelector("#cancel-project-modal");
	const projectsContainer = document.querySelector("#projects-container");

	addProjectBtn.addEventListener("click", () => {
		projectDialog.showModal();
	});
	projectDialogCancel.addEventListener("click", () => projectDialog.close());

	projectDialogForm.addEventListener("submit", () => {
		let projectTitle = projectTitleInput.value;
		let projectElement = createProjectElement(projectTitle);
		projectsContainer.appendChild(projectElement);
		projectTitleInput.value = "";

		// Add the new Project to the Projects array
		projects.push(new Project(projectTitle));
	});

	// Default Projects
	projectsContainer.appendChild(createProjectElement("Project one"));
	projectsContainer.appendChild(createProjectElement("Project two"));
}

function taskController() {
	const tasksContainer = document.querySelector("#tasks-wrapper");

	// Default Tasks
	tasksContainer.appendChild(
		createTaskElement("Task one", "Dummy text for task one", "22/1/2022")
	);
	tasksContainer.appendChild(
		createTaskElement("Task Two", "Dummy text for task two", "14/12/2020")
	);
}
