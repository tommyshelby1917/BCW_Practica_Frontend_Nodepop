import DataService from "../services/DataService.js";
import PubSub from "../services/PubSub.js";

export default class LoginController {

  constructor(element) {
    this.element = element;
    this.attachEventListeners();
  }

  attachEventListeners() {
    this.element.addEventListener('submit', async (event) => {
      // To prevent the form from being sent and thus control it we
      event.preventDefault();

      if (this.element.checkValidity()) {
        const data = new FormData(this.element);
        const user = data.get('username');
        const password = data.get('password');
        const url = new URLSearchParams(window.location.search);
        const next = url.get('next') || '/';
        try {
          const result = await DataService.login(user, password);
          location.href = next; // Redirect to the home
        } catch (error) {
          // Grita
          PubSub.publish(PubSub.events.ERROR_MESSAGE, error);
        }
      } else {
        // Grita
        PubSub.publish(PubSub.events.ERROR_MESSAGE, 'Both fields are required');
      }

    });

  }

}