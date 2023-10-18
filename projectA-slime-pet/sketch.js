let ballX = 250;
let ballY = 250;
let angle = 0;
let beginText = "Click the Screen To Wake It Up!";

let moving;

let xacc = 1;
let yacc = 2;
let d=55;
let growspeed=2;

let wakemillisecond = 0;

let angle1;
let angleV;
let radiald;
let sinValue;

let h=5;

let h1 = 2;
let x, y;
let speed;
let r, g, b;

let speedX=5;
let speedY=5;

let xArray = [];
let yArray = [];
let speedArray = [];
let dArray=[];

let sinInputC = 0;

let change=false;

let speedI=2;

let distanceT

function setup(){
    createCanvas(500,500);

    angle1 = 0;
    angleV = 0.06;
    radiald = 150;
  
    moving = 0;
    
    x=random(width);
    y=random(height);
  
  
    r = 180;
    g = 183;
    b = 184;
    
    for (let i = 0; i <= 20; i ++) {
      xArray.push(random(width));
      yArray.push(random(height));
      speedArray.push(random(0.1, 5));
      dArray.push(random(0,10))
    }
    
    distanceT=dist(ballX,ballY,0,260);
}

function draw(){
    background(260,260,260,50);
  
  background1();

  fill(260);
  text(beginText, 80, 175);
  textSize(25);
  
  
  if (moving == 1) {
    
    background(260,260,260,100);
    
    if(millis() - wakemillisecond < 22500 || millis() - wakemillisecond >= 29500 ){
    ballwaken();
  }

    if(millis() - wakemillisecond > 3000 && millis() - wakemillisecond < 45500){
      ballMoving();
    }
    
    if (millis() - wakemillisecond >= 22500 && millis() - wakemillisecond < 29500) {
      
      if(distanceT>0){
         ballX -=ballX/speedX;
         ballY +=(-ballY+250)/speedY;
      }
      fill(0,0,0,90);
  circle(ballX, ballY, d);
       }
    
    if(millis() - wakemillisecond >= 29500 && millis() - wakemillisecond < 45500){
      ballsin();
    }
    
    if (millis() - wakemillisecond >= 45500 ) {
      ballcircle();
      }
    
  } else if (moving == 0) {
    ball();
  }else if( moving == 2){
    ballIn();
  }
  
}

function mousePressed() {
  if (moving == 0){
  beginText = "";
  
  moving = 1;
  wakemillisecond = millis();
  }else if(moving == 1){
    moving=2;
  }
}

function ball() {
  
    noStroke();
    fill(0);
    circle(ballX, ballY, d);
    ballY = ballY + sin(angle) * 0.3;
    angle += 0.1;
    
  }

function ballMoving() {
  text("Now wait until it wakes up…",10,20);
  
    noStroke();
    fill(0,0,0,90);
    circle(ballX, ballY, d);
  
    d=d+growspeed;
    if(d>200 || d <20 ){
      growspeed = -growspeed;
    }
  
    ballX = ballX + xacc;
    ballY = ballY + yacc;
  
    if (ballX < d/2 || ballX > width - d/2) {
      xacc = -xacc;
    }
    if (ballY < d/2 || ballY > height - d/2) {
      yacc = -yacc;
    }
  }

function ballwaken() {
    fill(0,0,0);
    noStroke();
    circle(ballX, ballY, d);
  
    for (let i = 0; i < 2; i += 0.5) {
      ballY = ballY + sin(angle) * i;
      angle += 0.01;
      ballX = ballX + sin(angle) * (i * random(0, 2));
    }
  }

function ballsin() {
    noStroke();
          fill(100,20,30);
          text("It's still exploring its surrounding……",10,20);
  
    d=15;
    sinValue = 60 * sin(ballX * 0.05) + 10;
    ballY = sinValue + 250;
    ballX += 2;
    
    if (ballX > width +d) {
      ballX = 0;
    }
    
    for(let i=20; i<=80; i+=4){
              circle(ballX,ballY,i)
              noStroke();
              fill(0,0,0,50);
            }
  }

function ballcircle() {
    d=25;
    ballX = width / 2 + cos(angle1) * radiald;
    ballY = height / 2 + sin(angle1) * radiald;
    angle1 += angleV;
    
    for(let i=20; i<=80; i+=4){
              circle(ballX,ballY,i)
              noStroke();
              fill(0,0,0,50);
       }
    
          noStroke();
          fill(100,20,30);
          text("It seems that it wants to play with you.",10,20);
          text("Click on the screen to play with it.",10,45);
        
  }

function background1(){
  
    for (let i = height; i >= h1; i -= h1) {
      rect(0, i, 500, h1);
      noStroke();
      fill(r, g, b, (i / 400) * 300);
    }
  
    for (let i = 0; i <= 20; i += 1) {
    
      strokeWeight(2);
      stroke(260);
      noFill();
      circle(xArray[i], yArray[i], dArray[i]);
  
      
      yArray[i] = yArray[i] - speedArray[i];
      
      if(yArray[i]<0){
        yArray[i]=random(height);
      }
    }
  
      if (change){
        let sinValueC=sin(sinInputC);
        sinInputC +=0.008;
  
        let cG=map(sinValueC,-1,1,1,250);
        r=65;
        g=168+cG;
        b=191;
      }
    
    if(mouseIsPressed === true){
      change=true;
      
      let x1=mouseX;
        let y1=mouseY;
        circle(x1,y1,random(0,30));
        y1=y1+random(0,10);
      
    }
  }

function ballIn(){

    let dx=mouseX-ballX;
    let dy=mouseY-ballY;
    
      noStroke();
      fill(0);
      circle(ballX,ballY,5);
      for(let i=20; i<=80; i+=4){
              circle(ballX,ballY,i)
              noStroke();
              fill(0,0,0,50);
       }
    
    let distance=dist(ballX, ballY, mouseX, mouseY);
  
    if (distance>speedI && mouseX<width && mouseY<height){

      let angle=atan2(dy,dx);
      
      ballX += cos(angle)*speedI;
      ballY += sin(angle)*speedI;
    }
      if (mouseX>width || mouseY>height || mouseX<0 || mouseY <0){
        ball();
      }
  }