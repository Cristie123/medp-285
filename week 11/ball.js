let circleX = 200;
let xSpeed = 5;
let ballColor;

function setup() {
  createCanvas(800, 400);
  ballColor = color(random(255), random(255), random(255));
}

function draw() {
  background(220);


  fill(ballColor);
  noStroke();
  circle(circleX, 200, 20);


  circleX += xSpeed;


  if (circleX > width || circleX < 0) {
    xSpeed = -xSpeed * 1.1; 
    ballColor = color(random(255), random(255), random(255)); 
  }
}
