// Random Number Generator Tool Script
const minInput = document.getElementById("min");
const maxInput = document.getElementById("max");
const generateBtn = document.getElementById("generate");
const result = document.getElementById("result");

generateBtn.addEventListener("click", () => {
  const min = parseInt(minInput.value, 10);
  const max = parseInt(maxInput.value, 10);
  if (isNaN(min) || isNaN(max) || min > max) {
    result.innerText = "Result: Please enter a valid range.";
    return;
  }
  const rand = Math.floor(Math.random() * (max - min + 1)) + min;
  result.innerText = `Result: ${rand}`;
});

