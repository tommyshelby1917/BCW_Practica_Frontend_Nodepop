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
