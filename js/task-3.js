const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  const trimLine = event.currentTarget.value.trim();
  nameOutput.textContent = trimLine;
  if (trimLine === "") {
    nameOutput.textContent = "Anonymous";
  }
});