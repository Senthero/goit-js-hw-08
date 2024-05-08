function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

btnCreate.classList.add("create");
btnDestroy.classList.add("destroy");

btnCreate.addEventListener("click", (event) => {
  if (input.value < 1 || input.value > 100) {
    return;
  } else {
    createBoxes(input.value);
  }
});

const createBoxes = (amount) => {
  destroyBoxes();
  const array = [];
  for (let i = 0; i < amount; i++) {
    const divSize = document.createElement("div");
    divSize.style.width = `${30 + 10 * i}px`;
    divSize.style.height = `${30 + 10 * i}px`;
    divSize.style.backgroundColor = getRandomHexColor();
    array.push(divSize);
  }
  boxes.append(...array);
};
const destroyBoxes = () => {
  boxes.innerHTML = "";
  input.value = "";
};

btnDestroy.addEventListener("click", destroyBoxes);