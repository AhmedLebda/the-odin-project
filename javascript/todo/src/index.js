import "./css/styles.css";
import Task from "./task";

let taskTest = new Task("test", "this is a test", "30/12/2022", 1);
taskTest.getTitle();
taskTest.getDescription();
taskTest.getDueDate();
taskTest.getPriority();

taskTest.setTitle("new title");
taskTest.getTitle();

taskTest.setDescription("new description");
taskTest.getDescription();

taskTest.setDueDate("29/12/2022");
taskTest.getDueDate();

taskTest.setPriority(5);
taskTest.getPriority();
