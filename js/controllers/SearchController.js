import PostListController from "./PostListController.js";


const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

export default class SearchController {

  constructor(element, parent) {
    this.element = element;
    this.parent = parent;
    this.attachListeners();
  }

  attachListeners() {
    this.element.addEventListener('input', debounce(() => {
      let url = `http://localhost:8000/api/posts?_expand=user&q=${this.element.value}`;
      this.renderSearch(url);
    }, 1000));
  }

  renderSearch(filter) {
    const postController = new PostListController(this.parent);
    postController.renderPosts(filter);
  }

}