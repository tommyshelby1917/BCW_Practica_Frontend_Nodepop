import DataService from "../services/DataService.js";
import PubSub from "../services/PubSub.js";

export default class PostFormController {

  constructor(element) {
    this.element = element;
    this.attachEventListeners();
  }

  attachEventListeners() {
    this.element.addEventListener('submit', async event => {
      // We prevent the form from being sent so that we can control it.
      event.preventDefault();

      if (this.element.checkValidity()) {
        // To be able to separate the form and control their inputs and data
        const data = new FormData(this.element);

        const name = data.get('name');
        const price = data.get('price');
        const sale = Boolean(Number(data.get('buy-sale')));
        console.log(sale);
        const image = data.get('image');

        try {
          const result = await DataService.createPost(name, price, sale, image);
          PubSub.publish(PubSub.events.SUCCESS_MESSAGE, 'Post created!');
        } catch (error) {
          PubSub.publish(PubSub.events.ERROR_MESSAGE, error);
        }
      }
    });
  }


}
