import "./main.css";
import createTaskElement from "./createTaskElement";
import projectsController from "./ProjectsController";

projectsController();
taskController();

function taskController() {
	const tasksContainer = document.querySelector("#tasks-wrapper");
	const addTaskBtn = document.querySelector("#add-task-btn");
	const taskDialog = document.querySelector("#add-task-dialog");
	const taskDialogForm = document.querySelector("#add-task-dialog form");
	const taskCancelBtn = document.querySelector("#cancel-task-modal");
	const taskTitleInput = document.querySelector("#task-title-input");
	const taskDetailsInput = document.querySelector("#task-details-input");
	const taskDueDateInput = document.querySelector("#task-date-input");

	addTaskBtn.addEventListener("click", () => taskDialog.showModal());
	taskCancelBtn.addEventListener("click", () => taskDialog.close());
	taskDialogForm.addEventListener("submit", () => {
		const taskTitle = taskTitleInput.value;
		const taskDetails = taskDetailsInput.value;
		const taskDueDate = taskDueDateInput.value;
		console.log(taskDueDate);
		const taskElement = createTaskElement(taskTitle, taskDetails, taskDueDate);
		tasksContainer.appendChild(taskElement);
	});

	// Default Tasks
	tasksContainer.appendChild(
		createTaskElement("Task one", "Dummy text for task one", "2024-05-22")
	);
	tasksContainer.appendChild(
		createTaskElement("Task Two", "Dummy text for task two", "2024-07-12")
	);
}
