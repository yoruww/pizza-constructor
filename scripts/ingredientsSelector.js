export function initIngredientsSelector() {
  const buttonElements = document.querySelectorAll('[data-group]');

  const singleGroups = ['base', 'sauce'];
  const multiGroups = ['ingredient1', 'ingredient2'];

  buttonElements.forEach(button => {
    const group = button.dataset.group;

    button.addEventListener('click', () => {
      if (singleGroups.includes(group)) {
        handleSingleSelect(group, button);
      } else if (multiGroups.includes(group)) {
        handleMultiSelect(group, button);
      }
    });
  });

  function handleSingleSelect(group, clickedButton) {
    const isSelected = clickedButton.classList.contains('selected');

    document.querySelectorAll(`[data-group="${group}"]`).forEach(button => {
      button.classList.remove('selected');
    });

    if (!isSelected) {
      clickedButton.classList.add('selected');
    }
  }

   function handleMultiSelect (group, clickedButton) {
    const selected = document.querySelectorAll(`.ingredient-button.selected[data-group="${group}"]`);
    const IsAlreadySelected = clickedButton.classList.contains ('selected');

    if (IsAlreadySelected) {
      clickedButton.classList.remove('selected');
    } else if (selected.length < 2) {
      clickedButton.classList.add('selected');
    }
   }

}
