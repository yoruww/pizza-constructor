export function initShowPopup() {
  const popup = document.createElement('div');
  popup.classList.add('order-popup');

  popup.textContent = 'Заказ создан!';

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 4000);
}


