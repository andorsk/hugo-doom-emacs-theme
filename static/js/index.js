document
  .getElementById("toggle-buffer")
  .addEventListener("click", toggleBuffer);

function toggleBuffer() {
  document.getElementById("buffer-selector").classList.toggle("hidden");
}

function sendMessage(msg) {
  document.getElementById("message-buffer").innerText = msg;
}

document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "KeyB":
      toggleBuffer();
      return;
    case "KeyH":
      toggleHelpModal();
      return;
    case "KeyM":
      GoHome();
      return;
  }
});

function toggleHelpModal() {
  var x = document.getElementById("helpModal");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function GoHome() {
  window.location.href = "/";
}
