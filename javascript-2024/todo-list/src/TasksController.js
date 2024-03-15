import ProjectsStorage from "./ProjectsStorage";
import Task from "./task";
import { renderSelectedTasks } from "./render";

export default function tasksController() {
	const tasksContainer = document.querySelector("#tasks-wrapper");
	const addTaskBtn = document.querySelector("#add-task-btn");
	const taskDialog = document.querySelector("#add-task-dialog");
	const taskDialogForm = document.querySelector("#add-task-dialog form");
	const taskCancelBtn = document.querySelector("#cancel-task-modal");
	const taskTitleInput = document.querySelector("#task-title-input");
	const taskDetailsInput = document.querySelector("#task-details-input");
	const taskDueDateInput = document.querySelector("#task-date-input");

	// Show add task modal when (add task button) is clicked
	addTaskBtn.addEventListener("click", () => taskDialog.showModal());

	// Cancel add task modal when (cancel add task button) is clicked
	taskCancelBtn.addEventListener("click", () => taskDialog.close());

	// When (add task form) is submitted:
	// -----> create a new task obj
	// -----> get all projects from projects storage
	// -----> get the selected project
	// -----> push the created task obj into the selected project tasks array
	// -----> run render tasks function to render all tasks
	taskDialogForm.addEventListener("submit", () => {
		const taskTitle = taskTitleInput.value;
		const taskDetails = taskDetailsInput.value;
		const taskDueDate = taskDueDateInput.value;
		const taskObj = new Task(taskTitle, taskDetails, taskDueDate);
		const projects = ProjectsStorage.getProjects();
		const selectedProject = projects.find((project) => project.isSelected);
		selectedProject.addTask(taskObj);
		renderSelectedTasks(selectedProject);
	});

	// Create default tasks
	createDefaultTask("Task one", "some details about task one", "2024-3-15");
	createDefaultTask("Task two", "some details about task two", "2024-3-20");

	// Render tasks (default) for project one (default) when page loads for the first time
	renderSelectedTasks(ProjectsStorage.getProjects()[0]);
}

// util: creates default tasks inside the first project (default);
function createDefaultTask(title, details, date) {
	const taskObj = new Task(title, details, date);
	const project = ProjectsStorage.getProjects()[0];
	project.tasks.push(taskObj);
}
