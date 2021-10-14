import MessageController from "./controllers/MessageControler.js";
import PostFormController from "./controllers/PostFormController.js";
import DataService from "./services/DataService.js";
import UserNavControler from "./controllers/UserNavController.js"


window.addEventListener('DOMContentLoaded', function () {

  if (DataService.isAuthenticed() === false) {
    window.location.href = '/login.html';
  }

  // Nav controller
  const userNavContainer = document.querySelector('.user-container');
  new UserNavControler(userNavContainer);

  // Message controller
  const messageDiv = document.querySelector('.messages');
  const message = new MessageController(messageDiv);

  // Form controller
  const form = document.querySelector('form');
  new PostFormController(form);



});