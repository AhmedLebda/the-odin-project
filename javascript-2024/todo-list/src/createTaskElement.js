export default function createTaskElement(
	title,
	details,
	date,
	favorite,
	isComplete
) {
	const taskWrapper = document.createElement("div");
	taskWrapper.classList.add("task");

	const taskInfoContainer = document.createElement("div");
	taskInfoContainer.classList.add("task_info");

	const taskInfoWrapper = document.createElement("div");
	taskInfoWrapper.classList.add("task_info__wrapper");

	const taskTitle = document.createElement("h3");
	taskTitle.classList.add("task_title");
	taskTitle.textContent = title;
	isComplete
		? taskTitle.classList.add("line_through")
		: taskTitle.classList.remove("line_through");

	const taskDetails = document.createElement("p");
	taskDetails.classList.add("task_details");
	taskDetails.textContent = details;
	isComplete
		? taskDetails.classList.add("line_through")
		: taskDetails.classList.remove("line_through");

	const taskCheckbox = document.createElement("div");
	taskCheckbox.classList.add("task_checkbox");
	taskCheckbox.dataset.action = "toggle-task-complete";
	isComplete
		? taskCheckbox.classList.add("active_checkbox")
		: taskCheckbox.classList.remove("active_checkbox");

	taskInfoWrapper.appendChild(taskTitle);
	taskInfoWrapper.appendChild(taskDetails);
	taskInfoContainer.appendChild(taskCheckbox);
	taskInfoContainer.appendChild(taskInfoWrapper);

	const taskOptionsWrapper = document.createElement("div");
	taskOptionsWrapper.classList.add("task_options");

	const taskDueDate = document.createElement("p");
	taskDueDate.classList.add("due_date");
	taskDueDate.textContent = date;

	const taskFavoriteBtn = document.createElement("button");
	taskFavoriteBtn.classList.add("task_btn");
	taskFavoriteBtn.classList.add("fav");
	taskFavoriteBtn.textContent = "Favorite";
	taskFavoriteBtn.dataset.action = "favorite-task";
	favorite
		? taskFavoriteBtn.classList.add("active_fav")
		: taskFavoriteBtn.classList.remove("active_fav");

	const taskEditBtn = document.createElement("button");
	taskEditBtn.classList.add("task_btn");
	taskEditBtn.classList.add("edit");
	taskEditBtn.textContent = "Edit";
	taskEditBtn.dataset.action = "edit-task";

	const taskDeleteBtn = document.createElement("button");
	taskDeleteBtn.classList.add("task_btn");
	taskDeleteBtn.classList.add("delete");
	taskDeleteBtn.textContent = "Delete";
	taskDeleteBtn.dataset.action = "delete-task";

	taskOptionsWrapper.appendChild(taskDueDate);
	taskOptionsWrapper.appendChild(taskFavoriteBtn);
	taskOptionsWrapper.appendChild(taskEditBtn);
	taskOptionsWrapper.appendChild(taskDeleteBtn);

	taskWrapper.appendChild(taskInfoContainer);
	taskWrapper.appendChild(taskOptionsWrapper);

	return taskWrapper;
}
