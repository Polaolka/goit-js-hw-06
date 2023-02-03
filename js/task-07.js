
const refs = {
    sliderInput: document.querySelector('#font-size-control'),
    textOutput: document.querySelector('#text'),
}

refs.sliderInput.addEventListener('change', onSliderInput);

function onSliderInput(event) {

    refs.textOutput.style.fontSize = `${refs.sliderInput.value}px`;
}