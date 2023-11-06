let instanceOfTaxi;
let secondTaxi;

function setup() {
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasWrapper");

    instanceOfTaxi = new Taxi(100,200,1); 
    // create instance of taxi class 
    // and stores it in variables "instanceOfTaxi"

    secondTaxi = new Taxi(300,200,0.5);
  
}

function draw() {
  background(90, 120, 250);

  instanceOfTaxi.display();
  instanceOfTaxi.update();


  secondTaxi.display();
  secondTaxi.update();
  
}



class Taxi {
  //every class MUST have a constructor function
  //it's called automatically when instances of the class
  //are created
  constructor(startX, startY,s){
     //inside, we list and define the class's properties
     this.x = startX;
     this.y = startY;
     this.w = 100 //width
     this.scaleFactor = s;
     this.speed = random(-2,2);
     this.col = [120,150,90]; // r g b in array
  }

  display (){
    // here we actually draw the thing using property value
    push();
    translate(this.x, this.y);
    scale(this.scaleFactor);

    fill (this.col[0], this.col[1], this.col[2]);

    rect(0 ,0, this.w, 30); 

    pop();

  }

  update(){
    // here we will change property values
    this.x = this.x + this.speed

    this.reappear();

  }

  reappear(){
    if (this.x > width){
      this.x = -this.w*this.scaleFactor;
    }else if(this.x<-this.w*this.scaleFactor){
      this.x = width;
    }
  }

}