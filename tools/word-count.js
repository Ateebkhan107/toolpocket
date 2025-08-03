// Word Counter Tool Script
const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

function updateCounts() {
  const words = textInput.value.trim().split(/\s+/).filter(Boolean);
  wordCount.innerText = `Word Count: ${words.length}`;
  charCount.innerText = `Character Count: ${textInput.value.length}`;
}

textInput.addEventListener("input", updateCounts);

document.addEventListener("DOMContentLoaded", updateCounts);

