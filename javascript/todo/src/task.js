import Controls from "./controls";

class Task extends Controls {
  #date;
  #order;
  constructor(title, discription, dueDate, priority) {
    super(title, discription);
    this.#date = dueDate;
    this.#order = priority;
  }
  getDueDate() {
    return console.log(this.#date);
  }
  setDueDate(dueDate) {
    this.#date = dueDate;
  }
  getPriority() {
    return console.log(this.#order);
  }
  setPriority(pirority) {
    this.#order = pirority;
  }
}
