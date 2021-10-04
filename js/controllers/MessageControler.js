import PubSub from "../services/PubSub.js";
import { errorView, succesView } from "../views.js";

export default class MessageController {

  constructor(element) {
    this.element = element

    // We subscribe to the events that interest us
    PubSub.subscribe(PubSub.events.ERROR_MESSAGE, error => {
      this.showError(error);
    });

    PubSub.subscribe(PubSub.events.SUCCESS_MESSAGE, message => {
      this.showSucces(message);
    })
  }

  CloseEventListener() {
    const button = this.element.querySelector('button');
    // TODO: puede que esto no funcione por el callback
    button.addEventListener('click', () => {
      this.hideError();
    });
  }

  showError(message) {
    this.element.innerHTML = errorView(message);
    this.CloseEventListener();
  }

  showSucces(message) {
    this.element.innerHTML = succesView(message);
    this.CloseEventListener();
  }

  hideError() {
    // TODO: this.element.innerHTML = ''
    this.element.classList.toggle('hide-element');
  }

}

