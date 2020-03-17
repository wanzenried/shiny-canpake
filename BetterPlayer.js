class KeyboardPlayer {

  //
  // Player class optimized for keyboard use
  // _Position paramater is taken as a p5.Vector. Defaults to the middle of the canvas
  // _speed paramater is taken as a float. Defaults to 0.5



  // direction (Btn) parameters is taken as keycodes or the number asociated to said key (key codes can be found at https://keycode.info). Defaults to the arrow keys
  //

  constructor(position = createVector(width / 2, height / 2), speed = 0.3, upBtn = 38, leftBtn = 37, rightBtn = 39, downBtn = 40) {
    this.position = position;
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    this.speed = speed;
    this.directionBtn = [upBtn, leftBtn, rightBtn, downBtn];
    this.onGround = false;
  }

  update() {

    // Check if the up button is pressed
    if (keyIsDown(this.directionBtn[0]) && this.onGround) {
      this.velocity.add(createVector(0,-5));
      this.onGround = false;
    }

    // Check if the left button is pressed
    if (keyIsDown(this.directionBtn[1])) {
      this.position.x -= this.speed * deltaTime;
    }

    // Check if the right button is pressed
    if (keyIsDown(this.directionBtn[2])) {
      this.position.x += this.speed * deltaTime;
    }

    // Check if the down button is pressed
    if (keyIsDown(this.directionBtn[3])) {

    }
    // this.acceleration.add(gravity);
    this.acceleration.add((this.onGround) ? 0 : gravity);


    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);

    if (this.position.y +10 > height) {
      this.position.y = height-10
      this.onGround = true;
      this.velocity.mult(0);
      // this.velocity.mult(-1);
    }

      return this;
  }

  show() {
    // Add code for drawing the player here
    // Here's a green circle to get you started
    fill(0, 255, 0);
    circle(this.position.x, this.position.y, 20);

    return this;
  }

  touchingGround() {

  }



}

class ControllerPlayer {
  constructor() {

  }
}
