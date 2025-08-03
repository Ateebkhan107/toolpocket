// Global Dark Mode Toggle
const toggleBtn = document.getElementById("toggleMode");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    toggleBtn.innerText = isDark ? "☀️" : "🌙";
  });
}
// Set initial icon on load
window.addEventListener("DOMContentLoaded", () => {
  const isDark = document.body.classList.contains("dark");
  if (toggleBtn) toggleBtn.innerText = isDark ? "☀️" : "🌙";
});
