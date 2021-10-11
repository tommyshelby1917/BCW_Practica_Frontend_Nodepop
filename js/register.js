import SignupController from "./controllers/SignupController.js";
import MessageController from "./controllers/MessageControler.js";

window.addEventListener('DOMContentLoaded', function () {

  const form = document.querySelector('form');
  new SignupController(form);

  const messages = document.querySelector('.messages');
  new MessageController(messages);

})