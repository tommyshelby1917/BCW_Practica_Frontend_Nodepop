import DataService from "../services/DataService.js";
import PubSub from "../services/PubSub.js";
import { logoutView } from "../views.js";

export default class LogoutController {

  constructor(element) {
    this.element = element;
    this.isLogged();
  }

  isLogged() {
    if (DataService.isAuthenticed()) {
      const user = DataService.getAuthUser()[1];
      this.element.innerHTML = logoutView(user);
      this.logoutEventListener();
    }
  }

  logoutEventListener() {
    const button = this.element.querySelector('.logout-nav-button');
    button.addEventListener('click', this.userLogout);
  }

  userLogout() {
    DataService.logout();
    location.reload();
  }

}
