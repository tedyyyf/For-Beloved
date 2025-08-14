import { butterfliesBackground } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

const pc = butterfliesBackground({
  el: document.getElementById('app'),
  eventsEl: document.body,
  gpgpuSize: 18,
  background: 0x88CEFF,
  material: 'phong',
  lights: [
    { type: 'ambient', params: [0xffffff, 0.5] },
    { type: 'directional', params: [0xffffff, 1], props: { position: [10, 0, 0] } }
  ],
  materialParams: { transparent: true, alphaTest: 0.5 },
  texture: 'https://assets.codepen.io/33787/butterflies.png',
  textureCount: 4,
  wingsScale: [2, 2, 2],
  wingsWidthSegments: 16,
  wingsHeightSegments: 16,
  wingsSpeed: 0.75,
  wingsDisplacementScale: 1.25,
  noiseCoordScale: 0.01,
  noiseTimeCoef: 0.0005,
  noiseIntensity: 0.0025,
  attractionRadius1: 100,
  attractionRadius2: 150,
  maxVelocity: 0.1
})

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

const text = "i love the way you make me smile. \n\ni love that you accept me. \n\ni love that you make me feel safe. \n\ni love how you make me laugh when i'm sad. \n\ni love everything about you. \n\nI LOVE YOU";
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      document.getElementById("typing-text").textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 50);
    }
  }

  typeEffect();