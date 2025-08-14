const button = document.querySelector(".ripple-btn");

button.addEventListener("click", function (event) {
  const x = event.clientX - button.getBoundingClientRect().left;
  const y = event.clientY - button.getBoundingClientRect().top;

  const ripple = document.createElement("span");
  ripple.style.left = x + "px";
  ripple.style.top = y + "px";

  this.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 1000);
});