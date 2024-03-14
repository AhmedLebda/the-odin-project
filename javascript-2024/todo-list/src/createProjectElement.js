export default function createProjectElement(title) {
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
