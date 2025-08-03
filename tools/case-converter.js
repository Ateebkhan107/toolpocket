// Case Converter Tool Script
const textInput = document.getElementById("textInput");
const toUpper = document.getElementById("toUpper");
const toLower = document.getElementById("toLower");
const toTitle = document.getElementById("toTitle");

toUpper.addEventListener("click", () => {
  textInput.value = textInput.value.toUpperCase();
});

toLower.addEventListener("click", () => {
  textInput.value = textInput.value.toLowerCase();
});

toTitle.addEventListener("click", () => {
  textInput.value = textInput.value.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
});

