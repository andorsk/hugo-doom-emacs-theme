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
  console.log(event);
  switch (event.code) {
    case "KeyB":
      toggleBuffer();
      return;
    case "KeyH":
      toggleHelpModal();
      return;
    case "Slash":
      toggleHelpModal();
      return;
    case "KeyP":
      redirect("/posts");
      return;
    case "KeyT":
      redirect("/tags");
      return;
    case "KeyM":
      redirect("/");
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

function redirect(path) {
  window.location.href = "{{ .Site.BaseURL }}" + path;
}
