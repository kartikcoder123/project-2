var maincharacter;
var zombies;
var bgImg
var bg;
var shooter1, shooter2, shooter3
var zombies, zombiesImg;
function preload(){
  bgImg = loadImage("assets/bg.jpeg")
  shooter1 = loadImage("assets/shooter_1.png")
  shooter2 = loadImage("assets/shooter_2.png")
  shooter3 = loadImage("assets/shooter_3.png")
  zombiesImg = loadImage("assets/zombie.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg);
  bg.scale = 2

  maincharacter = createSprite(300,200,20,10)
   
  
  
}

function draw() {
  
 if(keyDown(LEFT_ARROW)){
   maincharacter.x -= 8
 }
 if(keyDown(RIGHT_ARROW)){
   maincharacter.x += 8
 }
 if(keyDown(UP_ARROW)){
   maincharacter.y -= 8
 }
 if(keyDown(DOWN_ARROW)){
   maincharacter.y += 8
 }
 zombies()
 
   drawSprites();
}

function zombies(){

  zombie = createSprite(random(510,900),random(10,509));
  zombie.scale = 0.5;
  zombie.addImage(zombiesImg)
  zombie.velocityY = -6;

  zombie.lifetime = 400;
}