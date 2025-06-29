import { initShowPopup } from './showPopup.js';

export function initOrderReceived() {
  const orderButton = document.querySelector('.order-button');

  orderButton.addEventListener('click', () => {
    const selectedButtons = document.querySelectorAll('.ingredient-button.selected');
    const order = {};

    selectedButtons.forEach(button => {
      const group = button.dataset.group;
      const label = button.dataset.label;

      if (order[group]) {
        if (!Array.isArray(order[group])) {
          order[group] = [order[group]];
        }
        order[group].push(label);
      } else {
        order[group] = label;
      }
    });

    console.log('Заказ оформлен:', order);
    initShowPopup();
  });
}
