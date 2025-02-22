function setup() {
  createCanvas(500, 500);
  textFont('Courier New');
}

function draw() {
  background(220);
  
   fill("white")
  stroke("white");
  rect(120,94, 260, 370,10);
  strokeWeight(10)
  rect(125,99, 250, 360,10);
  
  fill("white")
  stroke("black");
  strokeWeight(10)
  rect(125,99, 250, 360,10);


  fill('black');
    strokeWeight(3)
  textSize(48);
  textStyle(ITALIC);
  textAlign(CENTER)
  text('KINDNESS', 250, 200);
  
  fill('black');
  textSize(49);
  textStyle(ITALIC);
  text('LIMIT', 250, 285);
  
  fill('black');
  strokeWeight(10)
  textSize(100);
  textStyle(ITALIC);
  text('100', 245, 415);
  //help you to figure out where X and Y are
  //keep this on the bottom of the draw() function
  //so that is draws over your image
  textSize(20)
  fill("white")
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY + 10);
}

