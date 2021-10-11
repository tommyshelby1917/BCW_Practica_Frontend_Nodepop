import LoaderController from "./controllers/LoaderController.js";
import MessageController from "./controllers/MessageControler.js";
import PostListController from "./controllers/PostListController.js";

window.addEventListener('DOMContentLoaded', function () {

  // Loader controller
  const loaderDiv = document.querySelector('.loader');
  new LoaderController(loaderDiv);

  // Message controller 
  const messageDiv = document.querySelector('.messages');
  new MessageController(messageDiv);

  // Postlist controller
  const postListDiv = document.querySelector('.posts-list');
  const postListController = new PostListController(postListDiv);

  postListController.renderPosts();

});