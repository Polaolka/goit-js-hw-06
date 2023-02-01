const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listElem = document.querySelector("#ingredients");

const createLi = function(arr) {
  for (const ing of arr) {
    const liItemEl = document.createElement("li");
    liItemEl.classList.add('item')
    liItemEl.textContent = ing;
    listElem.append(liItemEl);
  }
}

createLi(ingredients);