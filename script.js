const divArr = document.querySelectorAll("div");
const colorArr = [];
addColors();
getinfo();

// Functoins

// Generate width and height of div's
function getinfo() {
  [...divArr].forEach((div, index) => {
    div.children[0].innerHTML = `${div.offsetWidth} x ${div.offsetHeight}`;
    div.style.backgroundColor = colorArr[index];
  });
}

// get random color

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// Adding colors to the array;
function addColors() {
  [...divArr].forEach(() => {
    colorArr.push(getRandomColor());
  });
}

// Events

// Called when the window is resized
window.addEventListener("resize", getinfo);
