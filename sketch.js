var playerData;

function preload() {
    //Hello World Image
    helloWorld = loadImage('helloWorld.png');  
    
}

function setup() {
    createCanvas(1350,600);
    
}

function draw() {
    background(0);
    fill(255);
    
//  position of Hello World Image  
    image(helloWorld, 200, 5, 960, 540);
      
}
