export default class ProjectsStorage {
	static projects = [];

	static addProject(project) {
		this.projects.push(project);
	}
	static getProjects() {
		return this.projects;
	}
	static setProjects(projectsArr) {
		this.projects = projectsArr;
	}
	static deselectAllProjects() {
		this.projects.map((project) => (project.isSelected = false));
	}
}
