import LoaderController from "./controllers/LoaderController.js";
import MessageController from "./controllers/MessageControler.js";
import PostListController from "./controllers/PostListController.js";
import SearchController from "./controllers/SearchController.js";
import UserNavControler from "./controllers/UserNavController.js"


window.addEventListener('DOMContentLoaded', function () {

  const userNavContainer = document.querySelector('.user-container');
  new UserNavControler(userNavContainer);

  // Loader controller
  const loaderDiv = document.querySelector('.loader');
  new LoaderController(loaderDiv);

  // Message controller 
  const messageDiv = document.querySelector('.messages');
  new MessageController(messageDiv);

  // Postlist controller
  const postListDiv = document.querySelector('.posts-list');
  const postListController = new PostListController(postListDiv);

  // Searh controller
  const searchInput = document.querySelector('#search');
  new SearchController(searchInput, postListDiv);

  postListController.renderPosts();

});