document
  .getElementById("toggle-buffer")
  .addEventListener("click", toggleBuffer);

function toggleBuffer() {
  document.getElementById("buffer-selector").classList.toggle("hidden");
}

function sendMessage(msg) {
  document.getElementById("message-buffer").innerText = msg;
}

const moveRate = 100;
const moveRatePage = window.outerHeight;

document.addEventListener("keydown", (event) => {
  console.log(event);
  switch (event.key) {
    case "b":
      toggleBuffer();
      return;
    case "h":
      toggleHelpModal();
      return;
    case "?":
      toggleHelpModal();
      return;
    case "p":
      redirect("/posts");
      return;
    case "t":
      redirect("/tags");
      return;
    case "m":
      redirect("/");
      return;
    case "j":
      moveDown(moveRate);
      return;
    case "k":
      moveUp(moveRate);
      return;
    case "g":
      moveToTop();
      return;
    case "d":
      if (event.ctrlKey === true) {
        console.log("page down");
        moveDown(moveRatePage / 2);
        return;
      }
    case "u":
      if (event.ctrlKey === true) {
        console.log("page up");
        moveUp(moveRatePage / 2);
      }
      return;
    case "G":
      moveToBottom();
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

function moveDown(x) {
  window.scrollBy(0, x);
}

function moveUp(x) {
  window.scrollBy(0, -1 * x);
}

function moveToTop() {
  scrollTo(0, 0);
}

function moveToBottom() {
  scrollTo(0, document.body.scrollHeight);
}
