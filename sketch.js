
function setup() {
  createCanvas(500,960);

  
}

function draw() {
  background(backgroundImg);  
  drawSprites();

  
}



function preload () {
  backgroundImg = loadImage ("snowfall.gif")
  
}
