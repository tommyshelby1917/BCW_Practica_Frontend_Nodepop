import DataService from "../services/DataService.js";
import PubSub from "../services/PubSub.js";
import { detailPostView } from "../views.js";

export default class postDetailController {

  constructor(element, postID) {
    this.element = element;
    this.loadPost(postID);
  }

  async loadPost(postID) {
    PubSub.publish(PubSub.events.SHOW_LOADING);
    try {
      console.log(" Loading post");
      const post = await DataService.getPostDetail(postID);
      this.element.innerHTML = detailPostView(post);
      this.addDeleteButtonEventListener(post);
    } catch (error) {
      PubSub.publish(PubSub.events.ERROR_MESSAGE, error);
    } finally {
      PubSub.publish(PubSub.events.HIDE_LOADING);
    }
  }

  addDeleteButtonEventListener(post) {
    const button = this.element.querySelector('button');
    if (button) {
      button.addEventListener('click', async () => {
        const answer = confirm('Are you sure you want to delete the post?');
        if (answer === true) {
          PubSub.publish(PubSub.events.SHOW_LOADING);
          button.setAttribute('disabled', 'disabled');

          try {
            await DataService.deletePost(post.id);
            window.location.href = '/?message=post-deleted';
          } catch (error) {
            PubSub.publish(PubSub.events.ERROR_MESSAGE, error);
            button.removeAttribute('disabled');
          } finally {
            PubSub.publish(PubSub.events.HIDE_LOADING);
          }
        }
      });
    }
  }

}