import Controls from "./controls";

class Task extends Controls {
  constructor(title, description, dueDate, priority) {
    super(title, description);
    this.dueDate = dueDate;
    this.priority = priority;
  }

  getDueDate() {
    console.log(this.dueDate);
  }
  getPriority() {
    console.log(this.priority);
  }

  setDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }
  setPriority(newPriority) {
    this.priority = newPriority;
  }
}

export default Task;
