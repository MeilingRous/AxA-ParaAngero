const startScreen = document.getElementById("start-screen");
const messageScreen = document.getElementById("message-screen");

let started = false;

document.body.addEventListener("click", () => {
  if (started) return;
  started = true;

  startScreen.classList.add("hidden");

  setTimeout(() => {
    messageScreen.classList.remove("hidden");
  }, 700);
});
