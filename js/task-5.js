function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const background = document.querySelector("body");
const colorButton = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

colorButton.addEventListener("click", () => {
  const color = getRandomHexColor();
  background.style.backgroundColor = color;
  colorText.textContent = color;
});