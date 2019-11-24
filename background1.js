
function setup() {
  reateCanvas(600, 400);
  background(255);
}

function draw() {
  ellipse(mouseX, mouseY, 10, 10);
}

function mouseReleased(){
  clear();
  background(255);
}

//function windowResized(){
// resizeCanvas(windowWidth,windowHeight); 
//}
