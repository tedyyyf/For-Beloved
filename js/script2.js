 
  const wrapper = document.querySelector('.rain-wrapper');
  const items = wrapper.querySelectorAll('.rain-item');
  const music = document.getElementById("bg-music");

  music.volume = 0.3;

  items.forEach(item => {
    const duration = Math.random() * 4 + 4; // 5–10
    const left = Math.random() * 200;

    item.style.left = `${left}%`;
    item.style.animationDuration = `${duration}s`;
    item.style.animationDelay = `0s`;
  });

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