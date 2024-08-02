const problem = document.querySelector(".problem");
const apply = document.querySelector(".button");
const email = document.querySelector(".email");
const error = document.querySelector(".error");

let isKeyDown = false;
function verification(e) {
  if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
    const el = email.value.trim();
    const mail = el.split("@");
    if (mail.length !== 2 || mail[1] !== "gmail.com") {
      problem.classList.remove("hidden");
      error.classList.remove("hidden");
    } else {
      problem.classList.add("hidden");
      error.classList.add("hidden");
    }
  }
  console.log("asdasd");
}
apply.addEventListener("click", verification);
window.addEventListener("keypress", verification);
