function toggleBox() {
  var element = document.querySelector(".toggle");
  element.style.display = element.style.display == "flex" ? "none" : "flex";
}
function toggleBall() {
  var ball = document.querySelector(".toggle-ball");
  ball.style.display = ball.style.display == "flex" ? "none" : "flex";
  toggleBox();
}
function toggleCanvas1() {
  var canvas1 = document.querySelector(".toggle-canvas1");
  canvas1.style.display = canvas1.style.display == "flex" ? "none" : "flex";
  toggleBox();
}

const innertext = document.querySelector(".circle-logo p");
innertext.innerHTML = innertext.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 10.8}deg)">${char}</span>`
  )
  .join("");

const text = document.querySelector(".circle-text p");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 8.7}deg)">${char}</span>`
  )
  .join("");
