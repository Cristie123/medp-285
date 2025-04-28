let particles = [];

function setup() {
  createCanvas(720, 400);
  colorMode(HSB);
}

function draw() {

  background(map(mouseX, 0, width, 180, 260), 40, 90);

  let wind = map(mouseX, 0, width, -0.1, 0.1);

  particles.push(new Particle(width / 2, height - 20, wind));

  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.update().show();
    if (p.alpha <= 0) particles.splice(i, 1);
  }
}

class Particle {
  constructor(x, y, wind) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-0.5, 0.5) + wind, random(-2, -1));
    this.alpha = 255;
    this.size = random(10, 20);
  }

  update() {
    this.pos.add(this.vel);
    this.alpha -= 2;
    return this;
  }

  show() {
    noStroke();
    fill(50, 100, 100, this.alpha);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}
