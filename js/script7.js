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

const text = "tau kan ini hewan kesukaan kamu. \n\nkupu kupu mempunyai sayap yang indah \n\nnamun karnna sayapnya di punggung sering kali dia tidak menyadari keindahannya sendiri \n\nkupu kupu sama sekali tidak bisa melihat keindahan sayapnya, tapi kamu bisa \n\nbegitupula kamu, kadang kamu melihat dirimu selalu kurang, padahal orang lain bisa dengan jelas melihat betapa spesialnya dan potensinya dirimu \n\ntinggal terusin kerja kerasmu, just keep flying";
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      document.getElementById("typing-text").textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 50);
    }
  }

  typeEffect();