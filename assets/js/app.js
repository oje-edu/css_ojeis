function toggleBox() {
  var element = document.querySelector(".toggle");
  element.style.display = element.style.display == "flex" ? "none" : "flex";
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
