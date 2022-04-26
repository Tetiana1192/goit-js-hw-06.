const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const ing = ingredients.map(element => {
  const items = document.createElement('li');

  items.textContent = element;
  items.classList.add('item');

  return items;
});

ingredientsList.append(...ing);












  
