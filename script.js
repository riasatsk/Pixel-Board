function numToLetter(number) {
  let column = "";
  while (number > 0) {
    let remainder = (number - 1) % 26;
    column = String.fromCharCode(65 + remainder) + column;
    number = Math.floor((number - 1) / 26);
  }
  return column;
}

function drawPixel(row, col, color) {
  let pixel = document.getElementsByClassName(row)[col];
  pixel.style.backgroundColor = color;
  return pixel;
}
function hozLine(row, color) {
  for (let i = 0; i <= 95; i++) {
    drawPixel(row, i, color);
  }
}

function vertLine(col, color) {
  for (let i = 1; i <= 48; i++) {
    drawPixel(numToLetter(i), col, color);
  }
}

function clean(row, col) {
  drawPixel(row, col, "black");
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function animatePixelHoz(row, color = "dodgerblue", speed = 10) {
  async function loopWithDelay() {
    for (let i = 0; i <= 95; i++) {
      drawPixel(row, i, color);

      // Add a time delay of 1 second between iterations
      await delay(speed);
      clean(row, i);
    }
  }
  loopWithDelay();
}

function animatePixelVert(col, color = "dodgerblue", speed = 10) {
  async function loopWithDelay2() {
    for (let i = 1; i <= 48; i++) {
      let row = numToLetter(i);
      drawPixel(row, col, color);

      // Add a time delay of 1 second between iterations
      await delay(speed);
      clean(row, col);
    }
  }
  loopWithDelay2();
}

function animatePixelHozReverse(row, color = "dodgerblue", speed = 10) {
  async function loopWithDelay() {
    for (let i = 95; (i) => 0; i--) {
      drawPixel(row, i, color);

      // Add a time delay of 1 second between iterations
      await delay(speed);
      clean(row, i);
    }
  }
  loopWithDelay();
}
animatePixelHoz("AD");
animatePixelHozReverse("AD");

function moveablePixel(row, col, color = "yellow") {
  drawPixel(row, col, color);
  document.addEventListener("keydown", function (event) {
    // Check if the key code is for the Up arrow key (keyCode = 38)
    if (event.keyCode === 38) {
      drawPixel(numToLetter(row-1), col, color);
      clean(numToLetter(row), col);
    }
  });
}
moveablePixel(12, 44);
