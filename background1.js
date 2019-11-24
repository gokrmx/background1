function setup() {
  createCanvas(windowWidth, windowHeight);
background(255);
}

function draw() {
  ellipse(mouseX, mouseY, 10, 10);
}

function mouseReleased(){
  clear();
}

function windowResized(){
 resizeCanvas(windowWidth,windowHeight); 
}
