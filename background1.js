
function setup() {
  var canvas = createCanvas(600, 400);
  canvas.parent('sketch-holder');
  background(255);
}

function draw() {
  ellipse(mouseX, mouseY, 10, 10);
}

function mouseReleased(){
  clear();
}

//function windowResized(){
// resizeCanvas(windowWidth,windowHeight); 
//}
