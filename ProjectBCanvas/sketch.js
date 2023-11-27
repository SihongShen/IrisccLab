console.log("does this work?");

let number = 4;
let aSquare = 100;
let squarePacing = 25;
let sumWidth = number*aSquare+(number-1)*squarePacing;
let sumHeight = sumWidth;
let beginX = (600-sumWidth)/2;
let beginY = (600-sumHeight)/2;

let xSquare=[];
let ySquare=[];

let squareNumber;

let player1;
// let player2;

function setup(){
  let cnv = createCanvas(600, 600);
  cnv.parent("canvasWrapper");

  player1=new Player(50,50,87, 83, 65, 68);
  // player2=new Player(550,550,73, 75, 74, 76);



}

function draw(){
    background(0);

    button();

    player1.update();
    player1.display();

    // player2.update();
    // player2.display();

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

  checkPosition(){
    if(){
      if(){

      }
      if(){

      }
      if(){

      }
      if(){

      }
    }

  }

}

function button(){
  let radiusSquare = 15;

  xSquare=[];
  ySquare=[];

  for (let i=0; i<number; i++){
    let y=beginY+i*(aSquare+squarePacing);
    for(let j=0; j<number; j++){
      let x=beginX+j*(aSquare+squarePacing);
      stroke(260);
      noFill();
      rect(x,y,aSquare,aSquare,radiusSquare);

      xSquare.push (x);
      ySquare.push (y);

    }
  }

  console.log(xSquare,ySquare);
}