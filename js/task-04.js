const decrButton = document.querySelector('[data-action="decrement"]');
const incrButton = document.querySelector('[data-action="increment"]');
const valueOutput = document.querySelector('#value')

let counterValue = 0;

const subtrClick = () => {
    counterValue -=1;
    if (counterValue < 0) {
      counterValue = 0;
    }
    valueOutput.textContent = counterValue;

  };

const addClick = () => {
    counterValue +=1;
    valueOutput.textContent = counterValue;
  };

decrButton.addEventListener('click', subtrClick);
incrButton.addEventListener('click', addClick);