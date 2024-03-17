import ProjectsStorage from "./ProjectsStorage";
import Task from "./task";
import { renderAllTasks, renderProjectTasks } from "./render";

export default function tasksController() {
	const tasksContainer = document.querySelector("#tasks-wrapper");
	const addTaskBtn = document.querySelector("#add-task-btn");
	const taskDialog = document.querySelector("#add-task-dialog");
	const taskDialogForm = document.querySelector("#add-task-dialog form");
	const taskCancelBtn = document.querySelector("#cancel-task-modal");
	const taskTitleInput = document.querySelector("#task-title-input");
	const taskDetailsInput = document.querySelector("#task-details-input");
	const taskDueDateInput = document.querySelector("#task-date-input");

	// Show modal to add a new task and resets the form
	addTaskBtn.addEventListener("click", () => {
		taskDialog.showModal();

		taskTitleInput.value = null;
		taskDetailsInput.value = null;
		taskDueDateInput.value = null;
	});

	// Close the add new task modal
	taskCancelBtn.addEventListener("click", () => taskDialog.close());

	// Creates new task obj and add it to the selected project tasks array
	taskDialogForm.addEventListener("submit", () => {
		const taskTitle = taskTitleInput.value;
		const taskDetails = taskDetailsInput.value;
		const taskDueDate = taskDueDateInput.value;
		const taskObj = new Task(taskTitle, taskDetails, taskDueDate);
		const projects = ProjectsStorage.getProjects();
		const selectedProject = projects.find((project) => project.isSelected);
		selectedProject.addTask(taskObj);
		renderProjectTasks(selectedProject);
	});
	// Add events to task's Favorite, Delete and Edit buttons
	tasksContainer.addEventListener("click", (e) => {
		const targetButtonData = e.target.dataset.action;
		const eventHandler = TaskOptionsEventHandling(e);
		if (targetButtonData === "favorite-task") {
			eventHandler.handleTaskFavorite();
		}
		if (targetButtonData === "delete-task") {
			eventHandler.handleTaskDelete();
		}
		if (targetButtonData === "edit-task") {
			eventHandler.handleTaskEdit();
		}
	});

	// Create default tasks
	createDefaultTask("Task one", "some details about task one", "2024-3-15");
	createDefaultTask("Task two", "some details about task two", "2024-3-20");

	// default: render all tasks
	renderAllTasks();
}

// util: creates default tasks inside the first project (default);
function createDefaultTask(title, details, date) {
	const taskObj = new Task(title, details, date);
	const project = ProjectsStorage.getProjects()[0];
	project.tasks.push(taskObj);
}

// handles events for task : Favorite , Delete and Edit
function TaskOptionsEventHandling(e) {
	const taskContainer = e.target.parentElement.parentElement;
	const projects = ProjectsStorage.getProjects();
	const parentProject = projects.find(
		(project) => project.getTitle() === taskContainer.dataset.project
	);
	const taskObj = parentProject.tasks.find(
		(task) => task.getId() === taskContainer.dataset.key
	);

	// util: toggles task's obj favorite prop and add a class (active_fav) to the task's favorite button
	function handleTaskFavorite() {
		taskObj.toggleFavorite();
		e.target.classList.toggle("active_fav");
	}

	// util: Deletes task obj from parent project arr and deletes the task element
	function handleTaskDelete() {
		parentProject.deleteTask(taskContainer.dataset.key);
		taskContainer.remove();
	}

	// Edits tasks
	function handleTaskEdit() {
		const editModal = document.querySelector(
			"[data-action='rename-task-modal'"
		);
		const editModalForm = editModal.querySelector("form");
		const editedTitleInput = document.querySelector(
			"[data-action='task-new-name-input'"
		);
		const editedDetailsInput = document.querySelector(
			"[data-action='task-new-details-input'"
		);
		const editedDateInput = document.querySelector(
			"[data-action='task-new-date-input'"
		);
		const cancelEditTaskBtn = document.querySelector(
			"[data-action='cancel-task-edit'"
		);
		const taskTitleElement = taskContainer.querySelector(".task_title");
		const taskDetailsElement = taskContainer.querySelector(".task_details");
		const taskDateElement = taskContainer.querySelector(".due_date");

		editModal.showModal();
		cancelEditTaskBtn.addEventListener("click", () => editModal.close());

		editModalForm.addEventListener("submit", () => {
			// Updates task object inside it's project array
			taskObj.setTitle(editedTitleInput.value);
			taskObj.setDetails(editedDetailsInput.value);
			taskObj.setDate(editedDateInput.value);

			// Updates task UI
			taskTitleElement.textContent = editedTitleInput.value;
			taskDetailsElement.textContent = editedDetailsInput.value;
			taskDateElement.textContent = editedDateInput.value;
		});

		// Resets edit task modal inputs
		editedTitleInput.value = null;
		editedDetailsInput.value = null;
		editedDateInput.value = null;
	}

	return { handleTaskFavorite, handleTaskDelete, handleTaskEdit };
}
