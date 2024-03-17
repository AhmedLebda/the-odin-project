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
	static renameProject(projectKey, newName) {
		const targetProject = this.projects.find(
			(project) => project.getId() === projectKey
		);
		targetProject.setTitle(newName);
	}
}
