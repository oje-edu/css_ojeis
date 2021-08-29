const text = document.querySelector(".circle-text p");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 8.7}deg)">${char}</span>`
  )
  .join("");
