import MessageController from "./controllers/MessageControler.js";
import PostFormController from "./controllers/PostFormController.js";
import DataService from "./services/DataService.js";

window.addEventListener('DOMContentLoaded', function () {

  if (DataService.isAuthenticed() === false) {
    window.location.href = '/login.html';
  }

  // Message controller
  const messageDiv = document.querySelector('.error-message');
  const message = new MessageController(messageDiv);

  // Form controller
  const form = document.querySelector('form');
  const formController = new PostFormController(form);

});