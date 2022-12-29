import Task from "./task.js";

export default class Project extends Task {
	constructor(title, description, tasks = []) {
		super(title, description);
		this.tasks = tasks;
	}

	getTasks() {
		// tasks without priority property will have priority property equal to 100 (At the end of the tasks)

		this.tasks.map((task) => {
			if (!task.priority) {
				task.priority = 100;
			}
		});

		// Sorting tasks by [priority]
		this.tasks.sort((a, b) => a.priority - b.priority);

		console.log(this.tasks);
	}

	addTask(task) {
		this.tasks.push(task);
	}

	// Removing a task by [title]
	removeTask(taskTitle) {
		const newTasks = this.tasks.filter((task) => task.title !== taskTitle);
		this.tasks = newTasks;
	}
}
