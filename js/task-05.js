const refs = {
  textInput: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
}

refs.textInput.addEventListener("input", onInputChange);
function onInputChange(event) {
  refs.output.textContent = event.currentTarget.value;
}