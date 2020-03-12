let canvasX = 600;
let canvasY = 600;
let box;

function setup() {
  // put setup code here
  createCanvas(canvasX, canvasY);
  box = new groundRect(100,100,300,250);
}

function draw() {
  // put drawing code here
  background(0);
  drawGrid(10,10,255,1);
  box.draw();
}
