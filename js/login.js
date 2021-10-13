import MessageController from './controllers/MessageControler.js';
import LoginController from './controllers/LoginController.js';
import LogoutController from './controllers/LogoutController.js';



window.addEventListener('DOMContentLoaded', function () {

  const form = document.querySelector('form');
  new LoginController(form);

  const logout = document.querySelector('.logout-container');
  new LogoutController(logout);

  const messages = document.querySelector('.messages');
  new MessageController(messages);
});