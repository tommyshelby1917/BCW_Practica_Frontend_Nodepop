import DataService from "../services/DataService.js";
import { postView } from "../views.js";
import PubSub from "../services/PubSub.js";

export default class PostListController {

  constructor(element) {
    this.element = element;
  }

  async renderPosts() {
    try {
      const posts = await DataService.getPosts();
      posts.forEach((e) => {
        const postElement = document.createElement('article');
        postElement.innerHTML = postView(e);
        this.element.appendChild(postElement);
      });
    } catch (error) {
      PubSub.publish(PubSub.events.ERROR_MESSAGE, error);
    }
  }
}