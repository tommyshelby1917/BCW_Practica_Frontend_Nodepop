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

  showError(message) {
    this.element.innerHTML = errorView(message);
  }

  showSucces(message) {
    this.element.innerHTML = succesView(message);
  }


}

