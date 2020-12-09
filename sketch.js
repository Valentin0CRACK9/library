
var fixedRect,movingRect

         
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 100, 50);
  fixedRect.shapeColor="green"
  fixedRect.debug=true;
movingRect=createSprite(100,100,50,100)
movingRect.shapeColor="green"
movingRect.debug=true
ballRect=createSprite(200,100,200,100);
ballRect.shapeColor="#3283a8"
ballRect.debug=true;


}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

if(isTouching(fixedRect,movingRect)){
  fixedRect.shapeColor="red"
    movingRect.shapeColor="red"
}
else{
  fixedRect.shapeColor="green"
    movingRect.shapeColor="green"
}
if(isTouching(movingRect,ballRect)){
  movingRect.shapeColor="pink"
  ballRect.shapeColor="purple"
}
else{
  movingRect.shapeColor="green"
  ballRect.shapeColor="#3283a8"
}
  drawSprites();
}
