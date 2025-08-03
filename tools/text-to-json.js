// Text to JSON Tool Script
const textInput = document.getElementById("textInput");
const downloadJSON = document.getElementById("downloadJSON");

downloadJSON.addEventListener("click", () => {
  let text = textInput.value.trim();
  if (!text) text = " ";
  // Convert to array of lines
  const lines = text.split(/\r?\n/);
  const json = JSON.stringify(lines, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "text.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

