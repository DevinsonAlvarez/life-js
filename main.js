const colors = {
  blue: '#00f',
  red: '#f00',
  green: '#0f0',
  yellow: '#ff0',
  pink: '#f0f',
  cyan: '#0ff',
  black: '#000',
  white: '#fff',
};

const canvas = document.querySelector('canvas');
canvas.style.backgroundColor = colors.black;
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const ctx = canvas.getContext('2d');

/**
 * Draw a circle on the canvas
 *
 * @param {number} x position X
 * @param {number} y position Y
 * @param {number} radius circle radius
 * @param {number} height circle height
 * @param {string} color circle color
 */
function drawCircle(x, y, radius, color) {
  ctx.fillStyle = color || colors.red;

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
}

/**
 * Draw a stroke circle on the canvas
 *
 * @param {number} x position X
 * @param {number} y position Y
 * @param {number} radius circle radius
 * @param {number} height circle height
 * @param {string} color circle color
 */
function drawStrokeCircle(x, y, radius, color) {
  ctx.strokeStyle = color || colors.red;

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.stroke();
}

/**
 * Clear the entire canvas
 */
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawCanvas() {
  clearCanvas();
  drawCircle(30, 30, 20, colors.cyan);
}

window.requestAnimationFrame(drawCanvas);
