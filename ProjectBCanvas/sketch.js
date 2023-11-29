console.log("does this work?");

let number = 4;
let aSquare = 100;
let squareSpacing = 25;
let sumWidth = number*aSquare+(number-1)*squareSpacing;
let sumHeight = sumWidth;
let beginX = (600-sumWidth)/2;
let beginY = (600-sumHeight)/2;

let players=[];
// let player1;
let fields=[];
let counter=0;

let firstInteraction=false;

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

}

function setup(){
  let cnv = createCanvas(600, 600);
  cnv.parent("canvasWrapper");

  players.push(new Player(50,50,87, 83, 65, 68));
  players.push(new Player(550,550,38, 40, 37, 39));
  // console.log(fields)
}

function draw(){
  background(0);
  // console.log("track/pb"+counter+".mp3");

  if(firstInteraction == false){
    return
  }


  for(let i=0; i<fields.length; i++){
    fields[i].display();
    fields[i].checkPlayers()

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
    
  }

  display(){
    push()
    translate(this.x, this.y);

    stroke(260);
    noFill();

    rect(0,0,aSquare,aSquare,15);
    text(this.name, 10, 10)

    // console.log(this.sound)
    if(this.vol == 1){
      text("PLAYING", 10, 40);
    }

    pop();

    // if(this.name == 1){

    // }
  }

  checkPlayers() {
    this.onField = false; // 在检查之前将 onField 设置为 false，以便重新评估
    for (let i = 0; i < players.length; i++) {
      let players1X = players[i].x;
      let players1Y = players[i].y;

      if (
        players1X > this.x &&
        players1X < this.x + aSquare &&
        players1Y > this.y &&
        players1Y < this.y + aSquare
      ) {
        this.onField = true; // 如果任一玩家在区域内，将 onField 设置为 true
      }
    }

    if (this.onField) {
      this.vol = 1;
      this.sound.setVolume(this.vol); // 如果有玩家在区域内，则设置音量为1
    } else {
      this.vol = 0;
      this.sound.setVolume(this.vol); // 如果没有玩家在区域内，则设置音量为0
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
    console.log(keyCode)
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
  event.preventDefault()
}

window.addEventListener("keydown", someoneClicked)