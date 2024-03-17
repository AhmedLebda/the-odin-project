export default class ProjectsStorage {
	static projects = [];

	static addProject(project) {
		this.projects.push(project);
	}
	static getProjects() {
		return this.projects;
	}
	static deleteProject(projectKey) {
		this.projects = this.projects.filter(
			(project) => project.getId() !== projectKey
		);
	}
	static deselectAllProjects() {
		this.projects.map((project) => (project.isSelected = false));
	}
	static selectProject(projectKey) {
		this.projects.map((proj) => {
			proj.getId() === projectKey
				? (proj.isSelected = true)
				: (proj.isSelected = false);
		});
	}
	static getSelectedProject() {
		return this.projects.find((proj) => proj.isSelected);
	}

	static renameProject(projectKey, newName) {
		const targetProject = this.projects.find(
			(project) => project.getId() === projectKey
		);
		targetProject.setTitle(newName);
	}

	static addTaskToProject(taskObj) {
		const selectedProject = this.getSelectedProject();
		selectedProject.addTask(taskObj);
	}
}
