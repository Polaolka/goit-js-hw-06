function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyEl: document.querySelector('body'),
  buttonChangeColorEl: document.querySelector('.change-color'),
  spanColorEl: document.querySelector('.color'),
}

refs.buttonChangeColorEl.addEventListener('click', onButtonChangeColor)

function onButtonChangeColor(event) {
  refs.spanColorEl.textContent = `${getRandomHexColor()}`;
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
}

