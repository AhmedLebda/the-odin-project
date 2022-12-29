export default class Controls {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }

  getTitle() {
    console.log(this.title);
  }
  getDescription() {
    console.log(this.description);
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }
  setDescription(newDescription) {
    this.description = newDescription;
  }
}
