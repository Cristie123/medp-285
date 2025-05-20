function setup() {
  let canvas = createCanvas(400, 200);
  canvas.parent("p5-canvas");
  noLoop();
}
function draw() {
  background('#cfe0c3');
  fill('#ffffff');
  ellipse(100, 100, 50, 50); // steaming mug
  fill('#7d5a50');
  text("Welcome to Chill Café!", 160, 110);
}
