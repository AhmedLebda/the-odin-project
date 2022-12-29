import "./css/styles.css";
import Task from "./task.js";
import Project from "./project.js";

const projectOne = new Project(
	"Project One",
	"This is the description for my first project"
);

const taskOne = new Task("Task one", "Task one description", "1/1/2023", 1);
const taskTwo = new Task("Task two", "Task two description", "2/12/2023");
const taskThree = new Task(
	"Task three",
	"Task three description",
	"12/3/2023",
	3
);

// Tests

projectOne.getTasks();
projectOne.addTask(taskOne);
projectOne.addTask(taskTwo);
projectOne.addTask(taskThree);
projectOne.getTasks();
projectOne.removeTask("Task one");
projectOne.removeTask("Task three");
projectOne.getTasks();
