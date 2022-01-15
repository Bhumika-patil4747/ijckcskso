img="";

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

function preload(){
    img = loadImage('download.jpg');
}

function draw(){
    image(img,0,0,640,420);
    fill("#ff0000");
    text("dog",45,75);
    noFill();
    stroke("#ff0000");
    rect(30,60,350,350);
    image(img,0,0,640,420);
    fill("#ff0000");
    text("cat",45,75);
    noFill();
    stroke("#ff0000");
    rect(100,200,250,350);
}