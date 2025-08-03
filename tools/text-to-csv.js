// Text to CSV Tool Script
const textInput = document.getElementById("textInput");
const downloadCSV = document.getElementById("downloadCSV");

downloadCSV.addEventListener("click", () => {
  let text = textInput.value.trim();
  if (!text) text = " ";
  // Simple CSV: split by lines, then by comma/tab/semicolon
  const lines = text.split(/\r?\n/);
  const csv = lines.map(line =>
    line.split(/\t|,|;/).map(cell => '"' + cell.replace(/"/g, '""') + '"').join(',')
  ).join("\r\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "text.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

