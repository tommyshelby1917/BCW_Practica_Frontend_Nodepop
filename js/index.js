import MessageController from "./controllers/MessageControler.js";
import PostListController from "./controllers/PostListController.js";

window.addEventListener('DOMContentLoaded', function () {

  // Message controller 
  const messageDiv = document.querySelector('.message-alert');
  const messageController = new MessageController(messageDiv);

  // Postlist controller
  const postListDiv = document.querySelector('.posts-list');
  const postListController = new PostListController(postListDiv);

  postListController.renderPosts();

});