console.log("js is linked!");

let karateChop;
let readyToChop = true;

let backgroundImage;

// let fruit1;
let fruitBasket = [];
let numFruits = 3;

let cherriesImage;

let fruitImageArray = [];
let numFruitsImages = 3;

function preload(){
    karateChop = loadSound("sounds/karate.m4a");
    backgroundImage = loadImage("images/gradient-bkg.png");

    cherriesImage = loadImage("images/fruit0.png");

    for(let i=0; i<numFruitsImages; i++){
        let path = "images/fruit"+i+".png";
        let img = loadImage(path);
        fruitImageArray.push(img);
    }
}

function setup(){   
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasWrapper");

    // fruit1 = new Fruit(width/2, height/2, cherriesImage);
    for(let i=0; i<numFruits; i++){
        let ran = floor(random(0,3))
        let singleFruit = new Fruit(random(width),random(height),ran);
        fruitBasket.push(singleFruit);       
    }
}

function draw(){
    background(0,50);
    image(backgroundImage,0,0,400,400);

    let distance = dist(pmouseX, pmouseY, mouseX, mouseY);
    if(mouseIsPressed == true){
    //distance between current mouse position and
    //mouse position in previous frame
    // let distance = dist(pmouseX, pmouseY, mouseX, mouseY);

    if(distance>30 && readyToChop == true){
        karateChop.play();
        readyToChop = false;
    }else if(distance<10){
        readyToChop = true;
    }
}

    fill(255);
    stroke(255);
    line(pmouseX, pmouseY, mouseX, mouseY);

    // fruit1.display();
    for(let i=0; i<fruitBasket.length;){

    }
}

class Fruit{
    constructor(startX, startY,fruitImg){
        this.x = startX;
        this.y = startY;

        this.img = fruitImg;
    }

    display(){
        push();
        translate(this.x, this.y);

        circle(0,0,50);

        image(this.img,-20,-25,40,50)

        pop();
    }

}