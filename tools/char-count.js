// Character Counter Tool Script
const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");

function updateCharCount() {
  charCount.innerText = `Character Count: ${textInput.value.length}`;
}

textInput.addEventListener("input", updateCharCount);
document.addEventListener("DOMContentLoaded", updateCharCount);

