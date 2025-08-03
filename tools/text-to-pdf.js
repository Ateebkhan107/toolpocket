// Text to PDF Tool Script
const textInput = document.getElementById("textInput");
const downloadPDF = document.getElementById("downloadPDF");

downloadPDF.addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const text = textInput.value || " ";
  const lines = doc.splitTextToSize(text, 180);
  doc.text(lines, 15, 20);
  doc.save("text.pdf");
});

