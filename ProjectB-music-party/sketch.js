let number = 4;
let aSquare = 100;
let squareSpacing = 25;
let sumWidth = number*aSquare+(number-1)*squareSpacing;
let sumHeight = sumWidth;
let beginX = (600-sumWidth)/2;
let beginY = (600-sumHeight)/2;
let players=[];
let fields=[];
let counter=0;
let firstInteraction=false;
let r=260;
let g=260;
let b=260;
let t=260;
let tIncrease=-3;
let img1;
let img2;
let img3;
function preload(){
//load all the sounds according to the position here
  for(let i=0; i<number; i++){
    let y=beginY+i*(aSquare+squareSpacing);
    for(let j=0; j<number; j++){
      let x=beginX+j*(aSquare+squareSpacing);
      let path="track/pb"+(counter+1)+".mp3";
      let sound = loadSound(path);
      let field=new Field(x,y,sound, counter);
      fields.push(field);
      counter++
    }
  }
//load all the images here
  backgroundImage = loadImage("canvas-pictures/canvasBackground.jpg");
  img1 = loadImage("canvas-pictures/player1.png");
  img2 = loadImage("canvas-pictures/player2.png");
  img3 = loadImage("canvas-pictures/player3.png");
}
function setup(){
  let cnv = createCanvas(600, 600);
  cnv.parent("canvasWrapper");
// give each player a starting postion, keys to move around, and images
  players.push(new Player(20,20,87, 83, 65, 68,img1));
  players.push(new Player(550,550,38, 40, 37, 39,img2));
  players.push(new Player(550,20,73,75,74,76,img3));
}
function draw(){
//enable the transition between opening scene and 
  if(firstInteraction == false){
    image(backgroundImage,0,0,600,600);
    background(r,g,b,20);
    noStroke();
    fill(4,0,250,85);
    rect(0,0,width,height);
    textFont("Black Ops One");
    textSize(72);
    noFill();
    stroke(0, 250, 238);
    strokeWeight(3);
    text("Music Party", 72,210);
    textFont("Gloria Hallelujah");
    textSize(28);
    noStroke();
    fill(260,t);
    text("Click anywhere to begin", 125, 440);
    text("Remember to turn on the volume!",80,390);
    t += tIncrease;
    if(t<=100 || t>=260){
      tIncrease *=-1;
    }
  }else{
    r=g=b=0;
  background(r,g,b);
  }
  if(firstInteraction == false){
    return
  }
  for(let i=0; i<fields.length; i++){
    fields[i].display();
    fields[i].checkPlayers();
  }
  for(let i=0; i<players.length; i++){
    players[i].update();
    players[i].display();
  }
}
class Field{
  constructor(startX,startY,sound, name){
    this.x = startX;
    this.y = startY;
    this.sound=sound;
    this.vol = 0;
    this.sound.setVolume(this.vol)
    this.name = name;
    this.onField = false;
    this.t0;
    this.t0SinInput=0;
    this.t0SinValue=260;
    this.t1;
    this.t1SinInput=0;
    this.t1SinValue=260;
    this.t2CircleDia = 30;
    this.t2CircleDiaSpeed = 3;
    this.t2O = 260;
    this.t2lastTime = 0;
    this.t3lastTime = 0;
    this.t4lastTime = 0;
    this.t5lastTime = 0;
    this.showText;
    this.t6lastTime = 0;
    this.t7lastTime = 0;
    this.t8lastTime = 0;
    this.t9lastTime = 0;
    this.t10angle = 0;
    this.t11angle = 0;
    this.t13lastTime = 0;
    this.circleX = this.x+30;
    this.circleY = this.y-30;
    this.t14angle = 0;
    this.t14angleV = 0.08;
    this.t14d = 10;
  }
  display(){
    //draw all the squares;
    push()
    translate(this.x, this.y);
    stroke(260);
    strokeWeight(1);
    noFill();
    rect(0,0,aSquare,aSquare,15);
    pop();
  }
//check the position of the players
//and play the sounds and the visual results
//according to the position
  checkPlayers() {
    this.onField = false; 
    for (let i = 0; i < players.length; i++) {
      let players1X = players[i].x;
      let players1Y = players[i].y;
      if (
        players1X > this.x &&
        players1X < this.x + aSquare &&
        players1Y > this.y &&
        players1Y < this.y + aSquare
      ) {
        this.onField = true; 
      }
    }
    if (this.onField) {
      this.vol = 1;
      this.sound.setVolume(this.vol); 
      if(this.name == 0){
        this.nameZero();
      }
      if(this.name == 1){
        this.nameOne();
      }
      if (this.name == 2) {
      this.nameTwo();
      }
      if(this.name == 3){
        this.nameThree();
      }
      if(this.name == 4){
        this.nameFour();
      }
      if(this.name == 5){
        this.nameFive();
      }
      if(this.name ==6){
        this.nameSix();
      }
      if(this.name == 7){
        this.nameSeven();
      }
      if(this.name == 8){
        this.nameEight();
      }
      if(this.name == 9){
        this.nameNine();
      }
      if(this.name == 10){
        this.nameTen();
      }
      if(this.name == 11){
        this.nameEleven();
      }
      if(this.name == 12){
        this.nameTwelve();
      }
      if(this.name == 13){
        this.nameThirteen();
      }
      if(this.name == 14){
        this.nameFourteen();
      }
      if(this.name == 15){
        this.nameFifteen();
      }
    } else {
      this.vol = 0;
      this.sound.setVolume(this.vol); 
    }
  }
//below is all the visual results for each square
  nameZero(){
    push()
    translate(this.x, this.y);
    stroke(260);
    fill(260,this.t0);
    rect(0,0,aSquare,aSquare,15);
    this.t0 = map(this.t0SinValue,-1,1,0,260);
    this.t0SinValue = sin(this.t0SinInput);
    this.t0SinInput +=0.096;
    pop();
  }
  nameOne(){
    push()
        translate(this.x, this.y);
        stroke(260);
        fill(244, 252, 3,this.t1);
        rect(0,0,aSquare,aSquare,15);
        this.t1 = map(this.t1SinValue,-1,1,0,260);
        this.t1SinValue = sin(this.t1SinInput);
        this.t1SinInput +=0.048;
        pop();
  }
  nameTwo() {
    this.t2lastTime = millis();
    if(this.t2lastTime%2000>=1100 && this.t2lastTime%2000<=3000){
        noFill();
        strokeWeight(3);
        stroke(5, 250, 238);
        for (let j = 0; j <= 3; j++) {
        circle(this.x + (aSquare / 2), this.y + (aSquare / 2), j * (this.t2CircleDia + sin(this.t2CircleDiaSpeed * j)));
        this.t2CircleDia += this.t2CircleDiaSpeed;
        if(j * (this.t2CircleDia + sin(this.t2CircleDiaSpeed * j))>=800){
          this.t2CircleDia = 30;
        }
        }
    }
  }
  nameThree(){
    this.t3lastTime = millis();
    if(this.t3lastTime%1800>=650 && this.t3lastTime%1800<=900){
      push();
      translate(this.x,this.y);
      noStroke();
      fill(3, 12, 173);
      rect(0,0,aSquare,aSquare,15);
      pop();
    }
    if(this.t3lastTime%1800>=950 && this.t3lastTime%1800<=1200){
      push();
      translate(this.x,this.y);
      noStroke();
      fill(168, 3, 149);
      rect(0,0,aSquare,aSquare,15);
      pop();
    }
  }
  nameFour(){
    this.t4lastTime = millis();
    if(this.t4lastTime%2000>=1000 && this.t4lastTime%2000<=1200){
      noStroke();
      fill(250, 170, 65,200);
      circle(random(width),random(height),80);
    }
    if(this.t4lastTime%2000>=600 && this.t4lastTime%2000<=900){
      noStroke();
      fill(250, 170, 65,200);
      circle(random(width),random(height),80);
    }
    if(this.t4lastTime%2000>=1100 && this.t4lastTime%2000<=1500){
      noStroke();
      fill(45, 197, 135,200);
      circle(random(width),random(height),80);
    }
    if(this.t4lastTime%2000>=1500 && this.t4lastTime%2000<=1999){
      noStroke();
      fill(245, 234, 135,200);
      circle(random(width),random(height),80);
    }
  }
  nameFive(){
    this.t5lastTime = millis();
    if (this.t5lastTime % 2000 >= 0 && this.t5lastTime % 2000 <= 1000) {
      this.showText = true; 
    }else{
      this.showText = false; 
    }
    if (this.showText) {
      push();
      translate(this.x, this.y);
      textSize(32);
      text("👏🏻", random(aSquare), random(aSquare));
      pop();
    }
  }
  nameSix(){
    this.t6lastTime = millis();
    if(this.t6lastTime%2000>=1100 && this.t6lastTime%2000<=1500){
      noStroke();
      fill(84, 43, 179,150);
      rect(0,0,300,300);
      fill(109, 120, 199,200);
      rect(400,150,50,50);
    }
  }
  nameSeven(){
    this.t7lastTime = millis();
    if(this.t7lastTime%1200>=500 && this.t7lastTime%1200<=800){
      noStroke();
      fill(84, 43, 179,150);
      rect(300,0,300,300);
    }
    if(this.t7lastTime%2000>=800 && this.t7lastTime%2000 <=1200){
      noStroke();
      fill(109, 120, 199,200);
      rect(150,150,50,50);
    }
  }
  nameEight(){
    this.t8lastTime = millis();
    if(this.t8lastTime%500 >=0 && this.t8lastTime%500<=200){
      noStroke();
      fill(192, 109, 199,150);
      rect(0,300,300,300);
    }
  }
  nameNine(){
    this.t9lastTime = millis();
    if(this.t9lastTime%500>=50 && this.t9lastTime%500<= 290){
      noStroke();
      fill(192, 109, 199,150);
      rect(300,300,300,300);
    }
  }
  nameTen(){
    let t10angleRad=radians(this.t10angle);
    push();
    translate(this.x+(aSquare/2),this.y+(aSquare/2));
    rotate(t10angleRad);
    noStroke();
    fill(240, 245, 184,180);
    triangle(0,0,80,550,-90,550);
    triangle(0,0,80,-550,-90,-550);
    pop();
    this.t10angle+=2
  }
  nameEleven(){
    let t11angleRad=radians(this.t11angle);
    push();
    translate(this.x+(aSquare/2),this.y+(aSquare/2));
    rotate(t11angleRad);
    noStroke();
    fill(184, 211, 245,160);
    triangle(0,0,-60,550,-250,550);
    triangle(0,0,160,-550,260,-550);
    pop();
    this.t11angle +=2.6;
  }
  nameTwelve(){
    let strokeCo=['#28ed2f','#ed28d3','#2835ed']
    let strokeCo1=random(strokeCo);
    stroke(strokeCo1);
    noFill();
    strokeWeight(random(0,4));
    circle(random(width),random(height),random(10,90));
  }
  nameThirteen(){
    this.t13lastTime = millis();
    if(this.t13lastTime%500>=0 && this.t13lastTime%500<=150){
      noFill();
      strokeWeight(3);
      stroke(247, 57, 111);
      line(10,10,580,580);
      line(10,550,40,580);
      line(550,10,580,40);
    }
    if(this.t13lastTime%500>=153 && this.t13lastTime%500<=250){
      noFill();
      strokeWeight(3);
      stroke(247, 57, 111);
      line(10,30,560,580);
      line(30,10,580,560);
      line(10,520,60,580);
      line(520,10,580,60);
    }
    if(this.t13lastTime%500>=253 && this.t13lastTime%500<=350){
      noFill();
      strokeWeight(3);
      stroke(247, 57, 111);
      line(10,60,530,580);
      line(60,10,580,530);
      line(10,490,20,580);
      line(490,10,580,20);
    }
  }
  nameFourteen(){
    textSize(32);
    text("🤘🏻",random(width),random(height));
  }
  nameFifteen(){
    noStroke();
    fill(41, 242, 118,220);
    this.t14angle += this.t14angleV;
    this.circleX += cos(this.t14angle)*this.t14d;
    this.circleY += sin(this.t14angle)*this.t14d;
    circle(this.circleX,this.circleY,random(20,80));
    }
  }
class Player{
  constructor(startX,startY,up,down,left,right,img){
    this.x = startX;
    this.y = startY;
    this.upKey = up;
    this.downKey = down;
    this.leftKey = left;
    this.rightKey = right;
    this.img = img;
    this.speed = 2;
  }
  update(){
  //move according to the code
    if(keyIsDown(this.upKey)){
      this.y -=this.speed;
    }
    if(keyIsDown(this.downKey)){
      this.y +=this.speed;
    }
    if(keyIsDown(this.leftKey)){
      this.x -=this.speed;
    }
    if(keyIsDown(this.rightKey)){
      this.x +=this.speed;
    }
  }
  display(){
    image(this.img,this.x,this.y,40,40);
  }
}

function mousePressed(){
  if(firstInteraction == false){
    for(i=0; i<fields.length; i++){
//directly begin to play all the sounds
//after the beginning scene
      fields[i].sound.loop();
    }
    firstInteraction = true;
  }
}
//prevent conflictions between this canvas and the website
function someoneClicked(event){
  // console.log(event)
  event.preventDefault();
}
window.addEventListener("keydown", someoneClicked);