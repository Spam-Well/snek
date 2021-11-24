function preload(){
movev=0;
moveh=0;
size=20;
apple=createSprite(Math.round(random(0,400)/size)*size,Math.round(random(0,400)/size)*size,size,size);
y=200;
x=200;
life=-10;  
}
function draw(){
  background("white");
  sprite=createSprite(x,y,size,size);
  //colison
  apple.shapeColor=120;
  {
    if(sprite.isTouching(apple)){
      apple.destroy();
      apple=createSprite(Math.round(random(0,400)/size)*size,Math.round(random(0,400)/size)*size,size,size);      
      life++;
    }
  }
  //control
  {
    if(keyDown("s")||keyDown("down")){
      movev=0;
    }if(keyDown("w")||keyDown("up")){
      movev=1;
    }if(keyDown("d")||keyDown("right")){
      moveh=1;
    }if(keyDown("a")||keyDown("left")){
      moveh=0;
    }
  }
  //move
  {
    if(movev==1){
      y=y-10;
    }if(movev==0){
      y=y+10;
    }if(moveh==1){
      x=x+10;
    }if(moveh==0){
      x=x-10;
    }
  }
  sprite.lifetime=life;
  drawSprites();
  if(y>400){
    y=0;
  }else if(y<0){
    y=400;
  }else if(x>400){
    x=0;
  }else if(x<0){
    x=400;
  }if(1){
    if((apple.x<x&&((x-apple.x)<200))||(apple.x>x&&((apple.x-x)>200))){
      moveh=0;
    }else if(apple.x!=x){
      moveh=1;
    }if((apple.y<y&&((y-apple.y)<200))||(apple.y>y&&((apple.y-y)>200))){
      movev=1;
    }else if(apple.y!=y){
      movev=0;
    }
  }
}
