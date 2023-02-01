const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElem = document.querySelector("#ingredients");


const createLiArr = [];

  for (const ing of ingredients) {
    const liItemEl = document.createElement("li");
    liItemEl.classList.add('item')
    liItemEl.textContent = ing;
    createLiArr.push(liItemEl)
  }

createLiArr.reduce((result, liItemEl) => {
  return result += listElem.append(liItemEl);
}, 0);

