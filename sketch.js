var bg;
var story;
var gameState= "story";
function preload(){
  bg= loadImage("Images/tent.jpg");
  s= loadImage("Images/village.jpg");
  boy_Img= loadImage("Images/boy2.PNG");
    bg1=  loadImage("Images/forest.gif");
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  boy= createSprite(50, displayHeight/4, 10, 10);
    boy.addImage(boy_Img);
    ivground= createSprite(displayWidth/6, displayHeight/6, displayWidth, 10);
    ivground.visible= false;
    boy.visible= false;
  //story= createSprite(500, 500, 10, 10);
}

function draw() {

  //if(gameState == "story"){
  background(bg);
  //}  
  fill("white");
  textSize(34);
 // textFont("Georgia")
  text("WELCOME TO THE GAME", displayWidth/2 - 175, displayHeight/2 - 350);
  //level1();
  if(keyCode == 115){
    background(bg1);
    boy.visible= true;  
    boy.collide(ivground);
  }
  drawSprites();
}