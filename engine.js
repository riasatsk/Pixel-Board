let xPixel=100; // Number of pixel on the X axis
let yPixel = 50; // Number of pixel on the Y axis
let bgcolor = "black";


// Main Engine Do not change any thing

let app = document.body;
app.style.backgroundColor = "black";
function createHTMLElement(tagName, className1, className2) {
  const element = document.createElement(tagName);
  element.classList.add(className1, className2);
  app.appendChild(element);
}
function numToLetter(number) {
  let column = "";
  while (number > 0) {
    let remainder = (number - 1) % 26;
    column = String.fromCharCode(65 + remainder) + column;
    number = Math.floor((number - 1) / 26);
  }
  return column;
}

for (let i = 1; i <= yPixel; i++) {
  let num = i;
  for (let k = 1; k <= xPixel; k++) {
    createHTMLElement("div", numToLetter(num), k);
  }
}

// This is the end of the main part

// Main DrawPixel Function
function drawPixel(row, col, color) {
  let pixel = document.getElementsByClassName(row)[col];
  pixel.style.backgroundColor = color;
  return pixel;
}

function hozLine(row, color) {
  for (let i = 0; i <= xPixel-1; i++) {
    drawPixel(row, i, color);
  }
}

function vertLine(col, color) {
  for (let i = 1; i <= yPixel; i++) {
    drawPixel(numToLetter(i), col, color);
  }
}

function clean(row, col) {
  drawPixel(row, col, bgcolor);
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function animatePixelHoz(row, color = "dodgerblue", speed = 10) {
  async function loopWithDelay() {
    for (let i = 0; i <= xPixel-1; i++) {
      drawPixel(row, i, color);

      // Add a time delay of 1 second between iterations
      await delay(speed);
      clean(row, i);
    }
  }
  loopWithDelay();
}

function animatePixelVert(col, color = "dodgerblue", speed = 10) {
  async function loopWithDelay() {
    for (let i = 1; i <= yPixel; i++) {
      let row = numToLetter(i);
      drawPixel(row, col, color);

      // Add a time delay of 1 second between iterations
      await delay(speed);
      clean(row, col);
    }
  }
  loopWithDelay();
}

function animatePixelHozReverse(row, color = "dodgerblue", speed = 10) {
  async function loopWithDelay() {
    for (let i = xPixel-1; i >= 0; i--) {
      drawPixel(row, i, color);

      // Add a time delay of 1 second between iterations
      await delay(speed);
      clean(row, i);
    }
  }
  loopWithDelay();
}
animatePixelHoz("AB","green",15)