import DataService from "../services/DataService.js";
import { userNavView } from "../views.js";

DataService

export default class NavController {

  constructor(element) {
    this.element = element;
    this.showUserNav();
  }

  getUser(user = null) {
    if (DataService.isAuthenticed()) {
      user = DataService.getAuthUser()[1];
    }

    return user;
  }

  showUserNav() {
    let user = this.getUser();
    this.element.innerHTML = userNavView(user);
    if (user) {
      this.logoutEventListener();
    }
  }

  logoutEventListener() {
    const button = this.element.querySelector('.logout-nav-button')
    button.addEventListener('click', this.userLogout);
  }

  userLogout() {
    DataService.logout();
    location.reload();
  }

}