document
  .getElementById("toggle-buffer")
  .addEventListener("click", toggleBuffer);

function toggleBuffer() {
  document.getElementById("buffer-selector").classList.toggle("hidden");
}
