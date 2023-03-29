var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var bomb,bombImg
var coin,coinImg
var energyDrink,energyDrinkImg;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  bombImg=loadImage("bomb.png")
  coinImg=loadImage("coin.png")
  energyDrinkImg=loadImage("energyDrink.png")
}

function setup(){
  
  createCanvas(400,400);
  

path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;




boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(0,0,100,800);

leftBoundary.invisible = false;
 leftBoundary.visible = true;
 leftBoundary.invisible = true;
 leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
 

  if(path.y > 400 ){
    path.y = height/2;
  }

  
  
  drawSprites();
  Bomb()
  Coin()
}

function Bomb(){

if(frameCount%60===0){
bomb=createSprite(155,50,100,100);
bomb.velocityY=6;
bomb.addImage("bomb",bombImg);
bomb.scale=0.1
bomb.x=Math.round(random(100,300))





}
}

function Coin(){

if(frameCount%20===0){
  coin=createSprite(155,50,100,100);
  coin.velocityY=6;
  coin.addImage("coin",coinImg);
  coin.scale=0.2
  coin.x=Math.round(random(100,300))

}


}