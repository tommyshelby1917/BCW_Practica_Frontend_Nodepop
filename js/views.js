export function errorView(message) {
  return `<div class="error">
            ${message}
            <button>Cerrar</button>
          </div>`;
}

export function succesView(message) {
  return `<div class="succes">
            ${message}
            <button>Cerrar</button>
          </div>`;
}

export function logoutView(username) {
  return `<div class="logout">
            <h2>Hi ${username}, do you want to logout?</h2>
            <button class="logout-button">Bye!</button>
          </div>`;
}

export function postView(post) {
  return `<a href="/detail.html?id=${post.id}">
            <div class="tweet">
              <p class="author">${post.name}</p>
              <p class="price">${post.price}</p>
              <p class="sale">${post.sale}</p>
            </div>
          </a>`;
}

export function detailPostView(post) {
  if (post === null) {
    return `<h1 class="post-not-found">No post found</h1>`;
  }

  let button = '';
  if (post.canBeDeleted) {
    button = `<button class="delete">Delete</button>`;
  }

  return `<div class="tweet-detail">
            <p class="author">${post.name}</p>
            <p class="price">${post.price}</p>
            <p class="sale">${post.sale}</p>
            <img class="post-img" src=${post.img} width="200">
            ${button}
          </div>`;
}

export function loaderView() {
  return `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;
}