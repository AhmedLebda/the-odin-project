export default function createProjectElement(title, isSelected) {
	const projectWrapper = document.createElement("div");
	projectWrapper.classList.add("project_item");
	isSelected
		? projectWrapper.classList.add("active")
		: projectWrapper.classList.remove("active");

	const projectTitle = document.createElement("h3");
	projectTitle.classList.add("project_name");
	projectTitle.textContent = title;

	const optionsWrapper = document.createElement("div");
	optionsWrapper.classList.add("project_options");

	const renameBtn = document.createElement("button");
	renameBtn.classList.add("project_option");
	renameBtn.textContent = "rename";
	renameBtn.dataset.action = "rename-project";

	const deleteBtn = document.createElement("button");
	deleteBtn.classList.add("project_option");
	deleteBtn.classList.add("delete");
	deleteBtn.textContent = "delete";
	deleteBtn.dataset.action = "delete-project";

	optionsWrapper.appendChild(renameBtn);
	optionsWrapper.appendChild(deleteBtn);
	projectWrapper.appendChild(projectTitle);
	projectWrapper.appendChild(optionsWrapper);

	return projectWrapper;
}
