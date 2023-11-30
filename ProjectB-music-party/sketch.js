console.log("does this work?");

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



function preload(){

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

  backgroundImage = loadImage("canvas-pictures/canvasBackground.jpg");

}

function setup(){
  let cnv = createCanvas(600, 600);
  cnv.parent("canvasWrapper");

  players.push(new Player(50,50,87, 83, 65, 68));
  players.push(new Player(550,550,38, 40, 37, 39));
  players.push(new Player(550,50,73,75,74,76));
  // console.log(fields)；
}

function draw(){

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
    text("Click anywhere to begin", 125, 390);

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
    fields[i].checkPlayers()

    if(fields[i].name ===1){
      strokeWeight(3);
    }
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
    
  }

  display(){
    push()
    translate(this.x, this.y);

    stroke(260);
    strokeWeight(1);
    noFill();

    rect(0,0,aSquare,aSquare,15);
    text(this.name, 10, 10)

    // console.log(this.name);
    if(this.vol == 1){
      text("PLAYING", 10, 40);
    }

    pop();

  }

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
        
        push()
        translate(this.x, this.y);
        stroke(260);
        fill(260,this.t0);
        rect(0,0,aSquare,aSquare,15);

        this.t0 = map(this.t0SinValue,-1,1,260,0);
        this.t0SinValue = sin(this.t0SinInput);
        this.t0SinInput +=0.096;
        pop();
      }
      if(this.name == 1){
        strokeWeight(3);
      
      }
    } else {
      this.vol = 0;
      this.sound.setVolume(this.vol); 
    }


  }

}



class Player{
  constructor(startX,startY,up,down,left,right){
    this.x = startX;
    this.y = startY;
    this.upKey = up;
    this.downKey = down;
    this.leftKey = left;
    this.rightKey = right;

    this.speed = 2;
  }

  update(){
    // console.log(keyCode)
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
    fill(255,3,3);
    circle (this.x, this.y,20);

  }



}

function mousePressed(){
  if(firstInteraction == false){

    for(i=0; i<fields.length; i++){
      fields[i].sound.loop();
    }
    firstInteraction = true;
  }

  
}


function someoneClicked(event){
  // console.log(event)
  event.preventDefault();
}

window.addEventListener("keydown", someoneClicked);
