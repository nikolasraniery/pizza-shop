const botao = document.querySelector("#button-table");

const closeButton = document.querySelector("#close-button");

const sizes = ["P", "M", "G", "GG", "XG"];
const numberChest = [92, 98, 102, 106, 114];
const numberWaist = [82, 84, 88, 92, 98];

const cellSize = document.querySelectorAll("#cell-size");
const cellChest = document.querySelectorAll("#cell-chest");
const cellWaist = document.querySelectorAll("#cell-waist");

cellSize.forEach((cell, index) => {
  const size = sizes[index];

  cell.textContent = `${size}`;
});

cellChest.forEach((cell, index) => {
  const chest = numberChest[index];

  cell.textContent = `${chest}`;
});

cellWaist.forEach((cell, index) => {
  const waist = numberWaist[index];

  cell.textContent = `${waist}`;
});

botao.addEventListener("click", function () {
  const modal = document.querySelector("#myModal");
  const modalOverlay = document.querySelector("#modal-overlay");

  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";
  modalOverlay.style.display = "flex";
});

closeButton.addEventListener("click", function () {
  const modal = document.querySelector("#myModal");
  const modalOverlay = document.querySelector("#modal-overlay");

  modal.style.display = "none";
  modal.style.alignItems = "";
  modal.style.justifyContent = "";
  modalOverlay.style.display = "none";
});
