
let NUM_OF_PARTICLES = 150; 

let particles = [];

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvasWrapper");

  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height));
  }

  colorMode(HSB);
}

function draw() {
  background(213,25,100);
  noStroke()
  fill(360,30,28);
  rect(0,height-50,width,50);

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];

    p.update();
    p.display();


    if(particles.length >= 150){
      particles.splice(i,1);
    }

    p.mouseWind();
  }


  while (particles.length < NUM_OF_PARTICLES) {
    let p = new Particle(random(width), random(height));
    particles.push(p);
  }
}

class Particle {
  constructor(startX, startY) {

    this.x = startX;
    this.y = startY;

    this.xSpeed = random(-5.5,-3.5);
    this.ySpeed = random(1.5,3);

    this.xSpeedSinInput = random(0, 2);

    this.angle = 0;
    this.angleSpeed = radians(random(1,5));
    this.xSpeedSinInputC = random(0, 2);
    this.x += cos(this.angle) * 2;

    this.d = 0;
    this.speedFactor = map(this.d, 0, width, -3, -1);

    this.B = 77;
  }

  update(){

    this.x = this.x + this.xSpeed * this.speedFactor;
    this.y = this.y + this.ySpeed * this.speedFactor;

    this.xSpeed = 1.1*map(noise(this.xSpeedSinInput),0,1,-5,5);
    this.xSpeedSinInput += 0.05;

    this.angle = this.angle + this.angleSpeed * sin(this.xSpeedSinInputC);
    this.xSpeedSinInputC += 0.01;

    if(this.y >= (height-30)){
      this.ySpeed = 0;
      this.xSpeed = 0;
      this.B -= 0.2;
      this.angle = radians(110);
    }

  }
  display() {

    push();
    translate(this.x, this.y);

    rotate(this.angle);

    fill(311,38,this.B);
    strokeWeight(0.3);
    stroke(311,10,79,10);

    beginShape();
    curveVertex(0,-12);
    curveVertex(0,-12);
    curveVertex(-5,0);
    curveVertex(0,8);
    curveVertex(0,8);
    endShape();
  
    beginShape();
    curveVertex(0,-12);
    curveVertex(0,-12);
    curveVertex(5,0);
    curveVertex(0,8);
    curveVertex(0,8);
    endShape();

    pop();
  }


  mouseWind(){
    this.d = dist(mouseX, mouseY, this.x, this.y);

    if(this.d<30){
    this.speedFactor = map(this.d, 0, width, -30, 30);
    }else if(this.d>=30){
      this.speedFactor = 1;
    }
  }
}
