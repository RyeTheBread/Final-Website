var sunX = 68.152;
var sunRadius = 47.534/2;

function setup() {
  var canvas = createCanvas(windowWidth, 400);
    canvas.parent('header');
 }

function draw() {
  background(0,182,223);
  
  //The ground
  fill(12,133,66);
  rect(0,270.166,width,129.834);
  
  //sun
  fill(252,238,33);
  circle(sunX,114.112,47.534/2);
  
  
  //tree trunk
  fill(118,83,33);
  rect(282.054,186.309,51.121,83.857);
  
  //tree top
  fill(12,133,66);
  circle(307.614,149.09,135.426/2);
  
  //name
  textSize(30);
  fill(35,31,32);
  text("Rye",48,198);
  text("McCubbin",48,223);
    
  sunX = sunX +1;
  if (sunX>width+sunRadius){
    sunX = -sunRadius;
  }
}