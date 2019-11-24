

function setup() {
  createCanvas(windowWidth*0.4, 200);
  background(255);
}

function draw() {
  ellipse(mouseX, mouseY, 10, 10);
}

function mouseReleased(){
  clear();
  background(255);
}

function resizeWindow(){
 resizeCanvas(windowWidth*0.4, 200); 
}
