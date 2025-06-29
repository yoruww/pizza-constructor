export function initOrderButtonActivator() {
  const groups = ['base', 'ingredient1', 'ingredient2', 'sauce'];
  const orderButton = document.querySelector('.order-button');

  document.addEventListener('click', () => {
    const selected = [...document.querySelectorAll('.ingredient-button.selected')];
    const selectedGroups = selected.map(btn => btn.dataset.group);
    
    const allGroupsSelected = groups.every(group => selectedGroups.includes(group));
    orderButton.classList.toggle('active', allGroupsSelected);
  });
}


