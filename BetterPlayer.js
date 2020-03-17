class KeyboardPlayer {

  //
  // Player class optimized for keyboard use
  // _Position paramater is taken as a p5.Vector. Defaults to the middle of the canvas
  // _speed paramater is taken as a float. Defaults to 0.5



  // direction (Btn) parameters is taken as keycodes or the number asociated to said key (key codes can be found at https://keycode.info). Defaults to the arrow keys
  //

  constructor(position = createVector(width / 2, height / 2), speed = 0.3, upBtn = 38, leftBtn = 37, rightBtn = 39, downBtn = 40) {
    this.position = position;
    this.lastPosition = position;
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.speed = speed;
    this.directionBtn = [upBtn, leftBtn, rightBtn, downBtn];
    this.onGround = false;
  }

  update() {
    // update lastPosition before anything else is done
    this.lastPosition = this.position.copy();

    // Check if the up button is pressed
    if (keyIsDown(this.directionBtn[0]) && this.onGround) {
      this.position.y += 0.01;
      this.velocity.add(createVector(0, -5));
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

    this.acceleration.add((this.onGround) ? 0 : gravity);


    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);

    if (this.position.y + 10 > height) {
      this.position.y = height - 10
      this.onGround = true;
      this.velocity.mult(0);
      // this.velocity.mult(-1);
    }

    for (var i = 0; i < boxes.length; i++) {
      let t = this.touchingGround(boxes[i]);

      if (t.inside) {
        if (t.sides) {
          this.velocity.x = 0;
        } else {
          this.velocity.mult(0);
          if (t.top) {
            this.onGround = true;
          }
        }
        this.position.y = t.goToY;
        this.position.x = t.goToX;
      }
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

  touchingGround(ground) {

    let top = ground.topLeftCorner.y;
    let left = ground.topLeftCorner.x;
    let right = ground.bottomRightCorner.x;
    let bottom = ground.bottomRightCorner.y;
    stroke(0, 255, 0);
    line(0, top, width, top);
    let object = {
      inside: false,
      goToY: 0,
      goToX: 0,
      top: false,
      sides: false
    }


    if (this.position.x > left && this.position.x < right && this.position.y > top && this.position.y < bottom) {
      object.inside = true;
    } else {
      object.inside = false;
      return object;
    }
    // test for touching sides
    if (this.lastPosition.x < left || this.lastPosition.x > right) {
      if (this.lastPosition.y > top && this.lastPosition.y < bottom) {
        object.goToX = (abs(this.lastPosition.x - left) < abs(this.lastPosition.x - right)) ? left - 0.1 : right + 0.1;
        object.goToY = this.position.y;
        object.sides = true;
        return object;
      }
    }
    // test for touching top
    if (this.lastPosition.y < top) {
      object.goToX = this.position.x;
      object.goToY = top;
      object.top = true;
      return object;
    }

    // test for touching bottom
    if (this.lastPosition.y > bottom) {
      object.goToX = this.position.x;
      object.goToY = bottom;
      object.top = false;
      return object;
    }
  }



}

class ControllerPlayer {
  constructor() {

  }
}
