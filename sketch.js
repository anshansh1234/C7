var box;
function setup()
{
createCanvas(400,400);
box=createSprite(200,200,30,30);
}
function draw()
{
  background("white")
  if(keyDown(UP_ARROW))
  {
    box.velocityY=-4
  }
  if(keyDown(DOWN_ARROW))
  {
    box.velocityY=4
  }
    drawSprites();
}




