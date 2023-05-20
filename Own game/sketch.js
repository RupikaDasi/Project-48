
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var pacman, pacmanImage;
var ghost;
var pellet;

var rightup;
var leftup;
var leftdown;
var rightdown;
var middleup;
var middledown;
var middleright;
var middleleft;

var engine;
var world;

var groundD;
var groundU;
var groundL;
var groundR;

function preload() {
 pacmanImage = loadImage("pacman.gif"); 
}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  groundD = new Ground (200, 395, 400, 20);
  groundU = new Ground (200, 5, 400, 20);
  groundL = new Ground (395, 200, 20, 400);
  groundR = new Ground (5, 200, 20, 400);


  var block_options = {
    isStatic: false
  }

  pacman = Bodies.circle(130,100,15, block_options);
  World.add(world,pacman);


  var rect_options = {
    isStatic: true,
  }

  rightup = Bodies.rectangle(320, 80, 70, 70, rect_options);
  World.add(world, rightup);
  rightup.shapeColour = "blue";

  rightdown = Bodies.rectangle(320, 320, 70, 70, rect_options);
  World.add(world, rightdown);

  
  leftup = Bodies.rectangle(80, 80, 70, 70, rect_options);
  World.add(world, leftup);

  
  leftdown = Bodies.rectangle(80,320,70,70, rect_options);
  World.add(world, leftdown);

  
  middleup = Bodies.rectangle(200, 80, 70, 70, rect_options);
  World.add(world, middleup);

  middledown = Bodies.rectangle(200, 320, 70, 70, rect_options);
  World.add(world, middledown);

  
  middleleft = Bodies.rectangle(80, 200, 70, 70, rect_options);
  World.add(world, middleleft);

  middleright = Bodies.rectangle(320, 200, 70, 70, rect_options);
  World.add(world, middleright);
   
  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw() {
  background(255,255,255); 

  Engine.update(engine);

  background("black");
   moveRight();

   ellipse(pacman.position.x, pacman.position.y, 15);

  rect(rightup.position.x, rightup.position.y, 70, 70);
  rect(rightdown.position.x, rightdown.position.y, 70, 70);
  rect(leftup.position.x, leftup.position.y, 70, 70);
  rect(leftdown.position.x, leftdown.position.y, 70, 70);
  rect(middleup.position.x, middleup.position.y, 70, 70);
  rect(middledown.position.x, middledown.position.y, 70, 70);
  rect(middleleft.position.x, middleleft.position.y, 70, 70);
  rect(middleright.position.x, middleright.position.y, 70, 70);

groundD.show();
groundU.show();
groundL.show();
groundR.show();

  drawSprites();
}

function moveRight(){
  if(keyCode === 39){
    pacman.position.x += 0.2;
     }

}

//animation and border