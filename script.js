let bgcolor = document.getElementById("clr");
let clrbtn = document.getElementById("btn-click");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

clrbtn.addEventListener("click", () => {
  let hexcolor = "#";

  for (let i = 0; i < 6; i++) {
    hexcolor += hex[getrandom()];
  }
  document.getElementById("clr").innerHTML = hexcolor;
  document.body.style.backgroundColor = hexcolor;
});

function getrandom() {
  return Math.floor(Math.random() * hex.length);
}