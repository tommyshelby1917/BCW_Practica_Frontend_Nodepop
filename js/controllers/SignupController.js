import DataService from "../services/DataService.js";
import PubSub from "../services/PubSub.js";

export default class SignupController {

  constructor(element) {
    this.element = element; // It's the <form> element
    this.attachEventListeners();
  }

  // Function that valide if all passwords are the same
  passwordConfirmation() {
    let inputs = document.querySelectorAll('input[type="password"]');

    // The password entered is added to the array if it is different.
    // If at the end we have more than 1, it means that the password does not match in all the fields
    let passwords = [];
    inputs.forEach((e) => {
      if (!passwords.includes(e.value)) {
        passwords.push(e.value);
      }
    });

    if (passwords.length == 1) {
      // All passwords match
      inputs.forEach((e) => {
        e.setCustomValidity('');
      });
    } else {
      // Some password doesn't match
      inputs.forEach((e) => {
        e.setCustomValidity('Las contraseñas no coinciden, inténtalo de nuevo.');
      });
    }
  }

  attachEventListeners() {

    this.element.addEventListener('submit', async function (event) {

      // We prevent the form will submit
      event.preventDefault();

      // If the form is validating
      if (this.checkValidity()) {
        try {
          const data = new FormData(this);
          const username = data.get('username');
          const password = data.get('password');
          // We register the user with the data collected
          const result = await DataService.registerUser(username, password);
          // Gritamos
          PubSub.publish(PubSub.events.SUCCESS_MESSAGE, 'Bienvenido a Nodepop. Tu usuario ha sido registrado');
        } catch (error) {
          PubSub.publish(PubSub.events.ERROR_MESSAGE, error);
        }
      } else {
        // If the form is not validating
        let message = '';
        this.elements.forEach((e) => {
          if (e.validity.valid === false) {
            errorMessage += `Error en el campo ${element.name}: ${element.validationMessage}`;
          }
        });
        // Gritamos
        PubSub.publish(PubSub.events.ERROR_MESSAGE, message);
      }
    })

    // Custom validation of each password field
    this.element.querySelectorAll('input[type="password"]').forEach((input) => {
      //Every time the user types a key, the password is checked by calling the function (checkIfAllPasswordAreEqual)
      // TODO: puede que esto no funcione por el callback
      input.addEventListener('input', () => {
        this.passwordConfirmation();
      });
    });

    // Every time there is a change in an input, we validate the entire form to activate or deactivate the submit button
    this.element.querySelectorAll('input').forEach((input) => {
      input.addEventListener('input', () => {
        if (this.element.checkValidity()) {
          this.element.querySelector('button').removeAttribute('disabled');
        } else {
          this.element.querySelector('button').setAttribute('disabled', true);
        }
      });
    });
  }
}