export function userNavView(user) {
  let welcome = '';

  if (user) {
    welcome = `
    <h2 class="welcome-nav">Hi ${user}!</h2>
    <button class="logout-nav-button">Logout</button>`
  } else {
    welcome = `<button class="login-nav-button"><a href="../login.html">Enter</a></button>
              <button class="register-nav-button"><a href="../register.html">Join us!</a></button>`
  }

  return `${welcome}`
}

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

  if (post === null) {
    return `<h1 class="post-not-found">No post found</h1>`;
  }

  let photo = '<img class="post-img" src="public/img/photo-icon.jpeg" width="200"></img>';
  if (post.photo) {
    photo = `<img class="post-img" src=${post.photo} width="200"></img>`;
  }

  return `
          ${photo}
          <a href="/detail.html?id=${post.id}">
            <div class="post">
              <p class="author">${post.name}</p>
              <p class="price">${post.price}</p>
              <p class="sale">${post.sale}</p>
            </div>
          </a>
          
          `;
}

export function detailPostView(post) {
  if (post === null) {
    return `<h1 class="post-not-found">No post found</h1>`;
  }

  let button = '';
  if (post.canBeDeleted) {
    button = `<button class="delete">Delete</button>`;
  }

  let photo = '<img class="post-img" src="public/img/photo-icon.jpeg" width="200"></img>';
  if (post.photo) {
    photo = `<img class="post-img" src=${post.photo} width="200"></img>`;
  }

  return `<div class="post-detail">
            <p class="author">${post.name}</p>
            <p class="price">${post.price}</p>
            <p class="sale">${post.sale}</p>
            
            ${photo}
            ${button}
          </div>`;
}

export function loaderView() {
  return `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;
}