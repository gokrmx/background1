function setup() {
  createCanvas(windowWidth, windowHeight);
background(255);
}

function draw() {
  point(mouseX, mouseY);
}

function mouseReleased(){
  clear();
}

function windowResized(){
 resizeCanvas(windowWidth,windowHeight); 
}
