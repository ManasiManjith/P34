
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let engine;
let world;

var bg_img
var monkey
var fruit
var sock
var ground
var fruitImg
var sockImg
var fruitGroup
var bananaGroup
var obstaclesGroup

var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload()
{
  bg_img = loadImage("background.jpeg")
  fruitImg = loadImage("fruit.png")
  sockImg = loadImage("sock.png")
  monkeyImg = loadImage("monkey.png")
  sock = loadImage("sock.png")
}



function setup() {
  createCanvas(windowWidth/1.3,windowWidth/2);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;

  monkey = createSprite(160,windowWidth/2.5,20,20);
  monkey.addImage("monkey",monkeyImg);
  monkey.scale = 1.1;
  edges= createEdgeSprites();

  fruitGroup = new Group()

}


function draw() 
{
  background(51);
  image(bg_img,0,0,width,height)
  Engine.update(engine);
  
  monkey.x = mouseX;
  
   drawSprites();

   var fruitImg = Math.random(1,3)
   if (frameCount % 80 == 0) {
    if (fruitImg == 1) {
         createFruit();
       } else if (fruitImg  == 2) {
         createFruit();
       }else {
         createFruit();
       }
     }

     var sockImg = Math.random(1,3)
     if (frameCount % 90 == 0) {
      if (sockImg == 1) {
           createSock();
         } else if (sockImg  == 2) {
           createSock();
         }else {
           createSock();
         }
       }


      //  if (fruit.isTouching(monkey)) {
      //   fruit.destroyEach();
      //   fruitCollection=fruitCollection + 50;
      // }
}


function createFruit() {
  fruit = createSprite(random(5, windowWidth),40, 10, 10);
  fruit.addImage(fruitImg);
  fruit.scale=0.3;
  fruit.velocityY = 5;
  fruit.lifetime = 200;
  fruitGroup.add(fruit)
  }

  function createSock() {
    sock = createSprite(random(5, windowWidth),40, 10, 10);
    sock.addImage(sockImg);
    sock.scale=0.2;
    sock.velocityY = 4;
    sock.lifetime = 200;
    }

    function reset(){
      gameState = PLAY;
      gameOver.visible = false;
      restart.visible = false;
      monkey.visible = true;
      monkey.changeAnimation("running",
                   monkeyImg);
      obstaclesGroup.destroyEach();
      bananaGroup.destroyEach();
      score = 0;
    }
