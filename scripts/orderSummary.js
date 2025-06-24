export function initOrderSummary() {
  const cartButton = document.querySelector('.to-cart-button');

  const summaryContainer = document.createElement('div');
  summaryContainer.classList.add('order-summary');
  cartButton.parentNode.insertBefore(summaryContainer, cartButton);

  document.addEventListener('click', (event) => {
    const clicked = event.target;

    if (clicked.matches('.ingredient-button')) {
      const label = clicked.dataset.label;
      const isSelected = clicked.classList.contains('selected');

      if (isSelected) {
        addToSummary(label);
      } else {
        removeFromSummary(label);
      }
    }

    if (clicked.matches('.order-item')) {
      const label = clicked.dataset.label;
      removeFromSummary(label);
      deselectButton(label);
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

  function deselectButton(label) {
    document.querySelectorAll('.ingredient-button').forEach(btn => {
      if (btn.dataset.label === label) {
        btn.classList.remove('selected');
      }
    });
  }
}

