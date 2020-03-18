class groundRect {
  constructor(x1, y1, x2, y2, solid = true) {
    this.topLeftCorner = createVector((x1 < x2) ? x1 : x2, (y1 < y2) ? y1 : y2);
    this.bottomRightCorner = createVector((x1 > x2) ? x1 : x2, (y1 > y2) ? y1 : y2);
    this.solid = solid;
  }
  draw() {
    rectMode(CORNERS);
    fill(100);
    noStroke();
    rect(this.topLeftCorner.x, this.topLeftCorner.y, this.bottomRightCorner.x, this.bottomRightCorner.y);
  }
  update() {}
}
