export default class Controls {
  #titles;
  #dis;
  constructor(title, discription) {
    this.#titles = title;
    this.#dis = discription;
  }

  getTitle() {
    return console.log(this.#titles);
  }
  setTitle(title) {
    this.#titles = title;
  }
  getDis() {
    return console.log(this.#dis);
  }
  setDis(discription) {
    this.#dis = discription;
  }
}
