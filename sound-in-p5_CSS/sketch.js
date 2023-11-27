let click;
let x=50;
let speed=2;


function preload(){
    click=loadSound("sounds/beat.mp3")
}

function setup(){
    let cnv = createCanvas(400, 400);
  cnv.parent("canvasWrapper");
}

function draw(){
    background(0);
    circle(x,200,50);
    if(x>width-25 || x<25){
        speed=-speed;
        clickSound.play();
    }

    x +=speed
}

function mousePressed(){
    clickSound.play();
}