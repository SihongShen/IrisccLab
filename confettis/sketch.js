let confettis = [];
let numConfetti = 300;

let backgroundHue = 0;

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent("canvasWrapper");

//   for(let i = 0; i < numConfetti; i++){
//     confettis.push(new Confetti(width/2,height/2)) 
//   }

  colorMode(HSB);
  backgroundHue = random(0,360);
}

function draw() {
  background(backgroundHue,10,255);

  confettis.push(new Confetti(width/2,height/2))


//   if(mouseIsPressed == true){
//     for(let i = 0; i < numConfetti; i++){
//         confettis.push(new Confetti(mouseX,mouseY)) 
//     }
//   }

  for(let i = 0; i < confettis.length; i++){
    confettis[i].update();
    confettis[i].display();
    confettis[i].checkOutOfCanvas();
  } 


  //limit number of confetti
  //every time the number is bigger than
  //a certain threshold(20), we delete the oldest confetti
//   if(confettis.length>20){

//     //at which index to delete
//     let index = 0;
//     //numbers of confettis to delete
//     let numDelete = 1;

//     confettis.splice(index, numDelete);


//   }

//    while(confettis.length>200){
//     let index = 0;
//     let numDelete = 1;
//     confettis.splice(index, numDelete);
//    }

//delete confettis once they leave canvas
for(let i = confettis.length-1; i >= 0; i--){

    if(confettis[i].onCanvas == false){
        confettis.splice(1,1);
    }
   

}

}

class Confetti{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.size = random(2, 10);
    this.speedX = random(-2, 2);
    this.speedY = random(-1, -3);

    this.hue = random(0,360);

    this.onCanvas = true;
  }

  checkOutOfCanvas(){
    //vertical
    if(this.y>height){
        this.onCanvas = false
    }
  }

  update(){
    //apply speeds to position
    this.x+=this.speedX;
    this.y+=this.speedY;

    //slowly change speeds
    //y slowly turns downward(positive)
    this.speedY = this.speedY + 0.1;
    this.speedX = this.speedX * 0.99;
 
  }   

   display(){
    push();
      translate(this.x, this.y);
      fill(this.hue, 255, 255);
      noStroke();
      circle(0, 0, this.size);
    pop();
   }

}


// function mousePressed(){
//     for(let i = 0; i < numConfetti; i++){
//         confettis.push(new Confetti(mouseX,mouseY)) 
//     }
// }