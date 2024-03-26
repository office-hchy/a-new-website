var left;
var right;

function setup() {
  noCanvas();
  left = createElement("div", "Drawing");
  left.size(windowWidth / 2, windowHeight);
  left.position(0, 0);
  left.style("background-color", "pink");
  left.mouseOver(highlight);
  left.mouseOut(unHighlight);
  right = createElement("div", "Video");
  right.size(windowWidth / 2, windowHeight);
  right.position(windowWidth / 2, 0);
  right.style("background-color", "blue");
}

function highlight() {
  this.style("background-color", "white");
}
t;

function unHighlight() {
  this.style("background-color", "revert");
}

function draw() {
  background(220);
}
