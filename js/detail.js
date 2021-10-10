import LoaderController from './controllers/LoaderController.js';
import MessageController from './controllers/MessageControler.js';
import postDetailController from './controllers/postDetailController.js';

window.addEventListener('DOMContentLoaded', function () {

  // TODO: Por algun motivo el loader no se carga
  const loaderDiv = document.querySelector('.loader');
  new LoaderController(loaderDiv);

  const messagesDiv = document.querySelector('.messages');
  new MessageController(messagesDiv);

  // We get the ID of the post that we want charge
  const postID = new URLSearchParams(window.location.search).get('id');

  const postDiv = document.querySelector('.post');
  new postDetailController(postDiv, postID);

});