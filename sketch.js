// constants:

let gravity;

// end of constants

let canvasX = 600;
let canvasY = 600;
let box;
let player;



function setup() {
  // put setup code here
  createCanvas(canvasX, canvasY);

  gravity = createVector(0,0.1);


  box = new groundRect(100, 400, 300, 500);
  player = new KeyboardPlayer(createVector(150,100));
}

function draw() {
  // put drawing code here
  background(0);
  drawGrid(10, 10, 255, 1);
  box.draw();
  player.update().show();
}
