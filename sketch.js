var left;
var right;
var officeName;

function setup() {
  noCanvas();
  left = createElement("div");
  left.class("block");
  left.size(windowWidth / 2, windowHeight);
  left.position(0, 0);
  //left.style("background-color", "pink");
  left.mouseOver(highlight);
  left.mouseOut(unHighlight);
  officeName = createP("ＨＣＨＹ");
  //officeName.position(0, 0);
  officeName.parent(left);
  right = createElement("div");
  right.class("block");
  right.size(windowWidth / 2, windowHeight);
  right.position(windowWidth / 2, 0);
  //right.style("background-color", "blue");
  right.mouseOver(highlight);
  right.mouseOut(unHighlight);
}

function highlight() {
  this.style("background-color", "black");
}

function unHighlight() {
  this.style("background-color", "revert");
}

function draw() {
  background(220);
}
