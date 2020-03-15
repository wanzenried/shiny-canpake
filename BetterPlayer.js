class KeyboardPlayer {

  //
  // Player class optimized for keyboard use
  // _Position paramater is taken as a p5.Vector. Defaults to the middle of the canvas
  // _speed paramater is taken as a float. Defaults to 0.5

  // ******************************* To be implemented later **************************************
  // **********************************************************************************************
  // _doubleTapDelay parameter is taken as an integer in milliseconds. Defaults to 500 milliseconds
  // **********************************************************************************************

  // direction (Btn) parameters is taken as keycodes or the number asociated to said key (key codes can be found at https://keycode.info). Defaults to the arrow keys
  //

  constructor(_position = createVector(width / 2, height / 2), _speed = 0.5, _upBtn = 38/*, _doubleTapDelay = 500*/, _leftBtn = 37, _rightBtn = 39, _downBtn = 40) {
    this.position = _position;
    this.speed = _speed;
    // this.doubleTapDelay = _doubleTapDelay;
    this.directionBtn = [_upBtn, _leftBtn, _rightBtn, _downBtn];

  }

  update() {

    // Check if the up button is pressed
    if (keyIsDown(this.directionBtn[0])) {

    }

    // Check if the left button is pressed
    if (keyIsDown(this.directionBtn[1])) {

    }

    // Check if the right button is pressed
    if (keyIsDown(this.directionBtn[2])) {

    }

    // Check if the down button is pressed
    if (keyIsDown(this.directionBtn[3])) {

    }

  }

  show() {
    // Add code for drawing the player here
    // Here's a green circle to get you started
    fill(0, 255, 0);
    circle(this.position.x, this.position.y, 20);

  }


}

class ControllerPlayer {
  constructor() {

  }
}
