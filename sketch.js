var fixedRect, movingRect;
var gameObject1, gameobject2, gameobject3, gameobject4;

function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(200,200,70,50);
  movingRect = createSprite(100,100,50,70);
  
  gameObject1 = createSprite(100,100,50,50); 
  gameObject2 = createSprite(200,100,50,50); 
  gameObject3 = createSprite(300,100,50,50); 
  gameObject4 = createSprite(400,100,50,50); 

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
  gameObject3.shapeColor = "green";
  gameObject4.shapeColor = "green";

}
function draw() {
  background(0);  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  // sum of the half of the width of the rects  
  //console.log(movingRect.width/2+fixedRect.width/2);
  // difference of the x position of moving Rect and the fixed one
  //console.log(movingRect.x - fixedRect.x);


if (isTouching(movingRect, gameObject4)){
  gameObject4.shapeColor = "red";
  movingRect.shapeColor = "red";
}else{
  gameObject4.shapeColor = "green";
  movingRect.shapeColor = "green";
}
//console.log(fixedRect.shapeColor);
  drawSprites();
}

