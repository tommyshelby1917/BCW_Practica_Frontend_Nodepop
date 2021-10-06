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
          </div>`
}

export function postView(post) {
  // TODO: Detail tweet link
  return `<div class="tweet">
            <p class="author">${post.name}</p>
            <p class="author">${post.price}</p>
            <p class="author">${post.sale}</p>
            <img src=${post.img} width="200">
          </div>`
}