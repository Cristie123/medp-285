function setup() {
    createCanvas(600, 400);
    colorMode(HSB);
    angleMode(DEGREES);
    describe('Two colorful, wiggling eyes that follow the cursor.');
  }
  
  function draw() { 
    background((frameCount * 0.2) % 360, 50, 90);
      let wiggle = sin(frameCount * 4) * 8;
  
    let eyes = [
      { x: width * 0.3 + wiggle, y: height * 0.5 },
      { x: width * 0.7 - wiggle, y: height * 0.5 }
    ];
  
    eyes.forEach((eye, i) => {

      let a = atan2(mouseY - eye.y, mouseX - eye.x);
  
      push();
        translate(eye.x, eye.y);
        rotate(a);
  
        fill((i * 180 + frameCount * 0.5) % 360, 80, 100);
        ellipse(0, 0, 80, 60);
  
        fill(0);
        ellipse(25, 0, 25, 25);
      pop();
    });
  }
  