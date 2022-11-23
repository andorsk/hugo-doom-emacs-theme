document
  .getElementById("toggle-buffer")
  .addEventListener("click", toggleBuffer);

function toggleBuffer() {
  document.getElementById("buffer-selector").classList.toggle("hidden");
}

function sendMessage(msg) {
  document.getElementById("message-buffer").innerText = msg;
}

sendMessage("hi");
