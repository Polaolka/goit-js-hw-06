const textInput = document.querySelector("#validation-input");

textInput.addEventListener('blur', onInputChange);

function onInputChange(event) {

    if (textInput.value.length !== Number(textInput.dataset.length)) {
        textInput.classList.add('invalid')
    } else {
        textInput.classList.remove('invalid')
        textInput.classList.add('valid')}
}
