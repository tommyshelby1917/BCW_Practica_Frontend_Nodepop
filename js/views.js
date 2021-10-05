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