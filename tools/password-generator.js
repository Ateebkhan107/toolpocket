// Password Generator Tool Script
const length = document.getElementById("length");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generateBtn = document.getElementById("generate");
const result = document.getElementById("result");

function generatePassword() {
  let chars = '';
  if (upper.checked) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (lower.checked) chars += 'abcdefghijklmnopqrstuvwxyz';
  if (number.checked) chars += '0123456789';
  if (symbol.checked) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
  if (!chars) return '';
  let pass = '';
  for (let i = 0; i < length.value; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pass;
}

generateBtn.addEventListener("click", () => {
  result.value = generatePassword();
});

