import "./scss/style.scss";

function colorSelect() {
  const appElement = document.querySelector("#app");
  const selectElement = document.createElement("select");
  selectElement.setAttribute("name", "select");

  ["Red", "Blue", "Green"].forEach((color) => {
    const optionColorElement = document.createElement("option");
    optionColorElement.setAttribute("value", color.toLowerCase());
    optionColorElement.textContent = color;
    selectElement.appendChild(optionColorElement);
  });

  appElement.appendChild(selectElement);
}

colorSelect();

function createBox() {
  const boxElement = document.createElement("div");
  boxElement.classList = "box bg-red";
  const appElement = document.querySelector("#app");
  appElement.appendChild(boxElement);
}

createBox();

function changeColor() {
  const selectElement = document.querySelector("select");
  selectElement.addEventListener("change", (event) => {
    const boxElement = document.querySelector(".box");
    console.log(event.target);
    const colorValue = event.target.value;
    boxElement.classList = `box bg-${colorValue}`;
  });
}

changeColor();
