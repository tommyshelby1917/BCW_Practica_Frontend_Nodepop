import LoaderController from './controllers/LoaderController.js';
import MessageController from './controllers/MessageControler.js';
import PostDetailController from './controllers/postDetailController.js';
import UserNavControler from "./controllers/UserNavController.js"


window.addEventListener('DOMContentLoaded', function () {


  const userNavContainer = document.querySelector('.user-container');
  new UserNavControler(userNavContainer);

  const loaderDiv = document.querySelector('.loader');
  new LoaderController(loaderDiv);

  const messagesDiv = document.querySelector('.messages');
  new MessageController(messagesDiv);

  // We get the ID of the post that we want charge
  const postID = new URLSearchParams(window.location.search).get('id');

  const postDiv = document.querySelector('.post-container');
  new PostDetailController(postDiv, postID);

});