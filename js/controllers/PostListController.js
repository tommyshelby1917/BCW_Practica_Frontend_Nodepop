import DataService from "../services/DataService.js";
import { postView } from "../views.js";
import PubSub from "../services/PubSub.js";


export default class PostListController {

  constructor(element) {
    this.element = element;
    this.clearPosts();
  }

  async renderPosts(filter) {
    PubSub.publish(PubSub.events.SHOW_LOADING);
    try {
      const posts = await DataService.getPosts(filter);
      if (posts.length > 0) {
        posts.forEach((e) => {
          const postElement = document.createElement('article');
          postElement.innerHTML = postView(e);
          this.element.appendChild(postElement);
        });
      } else {
        const noPostFound = document.createElement('h2');
        noPostFound.innerHTML = postView(null);
        this.element.appendChild(noPostFound);
      }
    } catch (error) {
      PubSub.publish(PubSub.events.ERROR_MESSAGE, error);
    } finally {
      PubSub.publish(PubSub.events.HIDE_LOADING);
    }
  }

  clearPosts() {
    const posts = document.querySelectorAll('article');
    if (posts) {
      posts.forEach((e) => {
        e.remove();
      })
    }

    const notFoundMessage = document.querySelector('.not-found-container');
    console.log(notFoundMessage);
    if (notFoundMessage) {
      notFoundMessage.remove();
    }
  }
}