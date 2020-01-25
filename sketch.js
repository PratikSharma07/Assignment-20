var movingRect,fixedRect;
var R,G,B;

function setup() {
  createCanvas(1420,690);
  
}

function draw() {
  
  R=map(mouseX,0,1420,0,255,0)
  G=map(mouseX,0,1420,0,0,255)
  B=map(mouseX,0,1420,255,0,0)
  background(R,G,B);  
  fill(255,0,0);
  ellipse(mouseX,mouseY,50,50);
  


  drawSprites();
}
