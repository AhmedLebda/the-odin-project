import uniqid from "uniqid";
export default class Project {
	constructor(title) {
		this.title = title;
		this._id = uniqid();
		this.tasks = [];
		this.isSelected = false;
	}

	getTitle() {
		return this.title;
	}
	setTitle(newTitle) {
		this.title = newTitle;
	}
	getId() {
		return this._id;
	}
	addTask(task) {
		if (this.isSelected) {
			this.tasks.push(task);
		}
	}
}
// Add method to add to project tasks
