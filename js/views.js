export function userNavView(user) {
  let welcome = '';

  if (user) {
    welcome = `
    <div class="login-logout-nav">
    <h2 class="welcome-nav-title">Hi ${user.toUpperCase()}!</h2>
    <button class="logout-nav-button">Logout</button>
    <button class="createpost-nav-button"><a href="../new.html">New post</a></button>
    </div>`
  } else {
    welcome = `
              <div class="login-logout-nav">
                <button class="login-nav-button"><a href="../login.html">Login</a></button>
                <button class="register-nav-button"><a href="../register.html">Join us!</a></button>
              </div>`
  }

  return `${welcome}`
}

export function errorView(message) {
  return `<div class="error">
            ${message}
          </div>`;
}

export function succesView(message) {
  return `<div class="succes">
            ${message}
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
    return `
    <div class="not-found-container">
      <h1 class="post-not-found">No post found!</h1>
      <button class="createpost-nav-button"><a href="../new.html">Create one!</a></button>
    </div>
    `;
  }

  let photo = '<img class="post-img" src="public/img/photo-icon.jpeg" width="200"></img>';
  if (post.photo) {
    photo = `<img class="post-img" src=${post.photo} width="200"></img>`;
  }

  return `
          <a href="/detail.html?id=${post.id}">
            <div class="post">
              <div class="photo-container">
                ${photo}
                <p class="sale-post">${post.sale.toUpperCase()}</p>
              </div>
              <div class="post-info">
                <p class="name-post">${post.name.toUpperCase()}</p>
                <p class="price-post">${post.price}€</p>
              </div>
              <button class="showmore-button">+ Info</button>
            </div>
          </a>
          
          `;
}

export function detailPostView(post) {
  if (post === null) {
    return `<h1 class="post-not-found">No post found!</h1>`;
  }

  let button = '';
  if (post.canBeDeleted) {
    button = `
    <div class="author-edit-container">
      <p class="author-edit-text">
        This is your publication. <br></br>What you wanna do?
      </p>
      <button class="delete">Delete</button>
    </div>
    `;
  }

  let photo = '<img class="post-img" src="public/img/photo-icon.jpeg" width="200"></img>';
  if (post.photo) {
    photo = `<img class="post-img" src=${post.photo} width="200"></img>`;
  }

  return `<div class="post-detail-container">
            <div class="post-detail-info">
            <div class="sale-detail-container">
              <p class="sale-detail">${post.sale}!</p>
            </div>
              <p class="title-detail">${post.name.toUpperCase()}</p>
              <div class="post-detail-photo">
                  ${photo}
              </div>
              <p class="description-detail">${post.description}</p>
            </div>
            <div class="post-detail-side">
              <div class="post-detail-price">
                <p class="price-detail">${post.price}€</p>
              </div>
              <div class="post-detail-delete">
                ${button}
                <a href="./index.html"><button class="back-button">Back to home</button></a>
              </div>
            </div>
          </div>`;
}

export function loaderView() {
  return `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;
}