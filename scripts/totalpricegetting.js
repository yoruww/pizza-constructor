export function initTotalPriceGetting() {
  const priceMap = {
    "Тонкое — 100 ₽": 100,
    "Толстое — 110 ₽": 110,
    "Безглютеновое — 130 ₽": 130,
    "Цельнозерновое — 120 ₽": 120,

    "Пепперони — 80 ₽": 80,
    "Курица — 70 ₽": 70,
    "Ветчина — 75 ₽": 75,
    "Бекон — 85 ₽": 85,

    "Сыр — 60 ₽": 60,
    "Лук — 30 ₽": 30,
    "Перец — 35 ₽": 35,
    "Креветки — 100 ₽": 100,

    "Томатный — 20 ₽": 20,
    "Чесночный — 25 ₽": 25,
    "Сырный — 30 ₽": 30,
    "Барбекю — 35 ₽": 35
  };

  const cartButton = document.querySelector('.to-cart-button');
  if (!cartButton) return;

  document.addEventListener('click', (event) => {
    const clicked = event.target;

    if (clicked.matches('.ingredient-button') || clicked.matches('.order-item')) {
        updateTotal();
    }
  });

  function updateTotal () {
    const selectedButton = document.querySelectorAll('.ingredient-button.selected');
    let totalprice = 0;
    
    selectedButton.forEach(btn => {
        const label = btn.dataset.label;
        const price = priceMap[label] || 0;
        totalprice += price;
     });

     cartButton.textContent = totalprice > 0 ? `В корзину за ${totalprice} ₽` : 'В корзину';
  }
}


