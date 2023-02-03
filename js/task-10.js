function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  numberEl: document.querySelector('#controls input'),
  buttonCreateEl: document.querySelector('[data-create]'),
  buttonDestroyEl: document.querySelector('[data-destroy]'),
  divBoxesEl: document.querySelector('#boxes'),
}

refs.numberEl.addEventListener('change', getNumberOfBox);
refs.buttonCreateEl.addEventListener('click', createBoxMarkup);
refs.buttonDestroyEl.addEventListener('click', onButtonDestroy);

let numberOfBox = 0;
function getNumberOfBox(event) {
  
  numberOfBox = Number(refs.numberEl.value);
   return refs.numberEl.value;
}


const createBoxArr = [];
function createBoxMarkup(event) {

  let boxMarkup = ``;
  let size = 20;
  for (let idx = 0; idx < numberOfBox; idx += 1) {

    boxMarkup +=`<div class="box" style="width: ${size += 10}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>\n`
  }
  refs.divBoxesEl.insertAdjacentHTML("afterbegin", boxMarkup);
  refs.numberEl.value = '';
}

function onButtonDestroy(event) {
  refs.divBoxesEl.innerHTML = "";
  refs.numberEl.value = '';
}

