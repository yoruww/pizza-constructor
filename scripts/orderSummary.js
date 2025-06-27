import { updateTotal } from './totalPriceGetting.js';

export function initOrderSummary() {
  const cartButton = document.querySelector('.order-button');

  const summaryContainer = document.createElement('div');
  summaryContainer.classList.add('order-summary');
  cartButton.parentNode.insertBefore(summaryContainer, cartButton);

  const singleGroups = ['base', 'sauce'];

  document.addEventListener('click', (event) => {
    const clicked = event.target;

    if (clicked.matches('.ingredient-button')) {
      const label = clicked.dataset.label;
      const group = clicked.dataset.group;
      const isSelected = clicked.classList.contains('selected');

      if (singleGroups.includes(group)) {
        removeGroupFromSummary(group); 
      }

      if (isSelected) {
        addToSummary(label);
      } else {
        removeFromSummary(label);
      }

      updateTotal(); 
    }

    if (clicked.matches('.order-item')) {
      const label = clicked.dataset.label;
      removeFromSummary(label);
      deselectButton(label); 
      updateTotal(); 
    }
  });

  function addToSummary(label) {
    if ([...summaryContainer.children].some(el => el.dataset.label === label)) return;

    const item = document.createElement('div');
    item.classList.add('order-item');
    item.dataset.label = label;
    item.textContent = label;
    summaryContainer.appendChild(item);
  }

  function removeFromSummary(label) {
    [...summaryContainer.children].forEach(el => {
      if (el.dataset.label === label) {
        el.remove();
      }
    });
  }

  function removeGroupFromSummary(group) {
    document.querySelectorAll(`.ingredient-button[data-group="${group}"]`).forEach(btn => {
      const label = btn.dataset.label;
      removeFromSummary(label);
    });
  }

  function deselectButton(label) {
    document.querySelectorAll('.ingredient-button').forEach(btn => {
      if (btn.dataset.label === label) {
        btn.classList.remove('selected');
      }
    });
  }
}
