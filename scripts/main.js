import { initIngredientsSelector } from './ingredientsSelector.js';
import { initOrderSummary } from './orderSummary.js';
import { initTotalPriceGetting } from './totalpricegetting.js';

document.addEventListener('DOMContentLoaded', () => {
  initIngredientsSelector();
  initOrderSummary();
  initTotalPriceGetting();
});
