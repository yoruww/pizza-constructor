import { initIngredientsSelector } from './ingredientsSelector.js';
import { initOrderSummary } from './orderSummary.js';
import { initTotalPriceGetting } from './totalPriceGetting.js';
import { initApperancePizzaSlices } from './appearancePizzaSlices.js';
import {initOrderButtonActivator} from './orderButtonActivator.js'

document.addEventListener('DOMContentLoaded', () => {
  initIngredientsSelector();
  initOrderSummary();
  initTotalPriceGetting();
  initApperancePizzaSlices();
  initOrderButtonActivator();
});