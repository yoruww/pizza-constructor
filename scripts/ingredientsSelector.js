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
        button.classList.toggle('selected');
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
}
