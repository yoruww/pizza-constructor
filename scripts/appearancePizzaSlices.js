export function initApperancePizzaSlices() {
  const slice = document.querySelectorAll('.pizza-constructor_preview img');

  document.addEventListener('click', (event) => {
    const clicked = event.target;

    if (clicked.classList.contains('ingredient-button')) {
      updatePizzaSlices();
    }

    if (clicked.classList.contains('order-item')) {
      updatePizzaSlices();
    }
  });

  function updatePizzaSlices() {
    const selectedButton = document.querySelectorAll('.ingredient-button.selected');

    const selectedGroups = new Set();

    selectedButton.forEach(btn => {
      const group = btn.dataset.group;
      selectedGroups.add(group);
    });

    slice.forEach((img, index) => {
      if (index < selectedGroups.size) {
        img.style.visibility = 'visible';
      } else {
        img.style.visibility = 'hidden';
      }
    });
  }
}







