
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var can,papperc;

function preload()
{
can = loadImage ("dustbingreen.png")
papperc = loadImage("paper.png")	
	
}

function setup() {
	createCanvas(1400, 200);

	groundSprite = createSprite(0,0,1400,7);
	groundSprite.shapeColor = "yellow"

	ww1 = createSprite(0,0,10,115);
	ww2 = createSprite(0,0,10,115);
	ww3 = createSprite(0,0,100,10);



	trash = createSprite(1100,120,50,50);
	trash.addImage(can)
	trash.scale = 0.4


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(700,185,800,10,{isStatic : true});
	World.add(world, ground);

	w1 =Bodies.rectangle(1055,110,10,80,{isStatic : true});
	World.add(world, w1);
	w2 =Bodies.rectangle(1145,110,10,80,{isStatic : true});
	World.add(world, w2);
	w3 =Bodies.rectangle(1100,175,100,7,{isStatic : true});
	World.add(world, w3);

var options = {
'restitution':0.2,
'friction':0.5,
'density':1.0


}
	
ball1 = new ball2();

	

	Engine.run(engine);
  
}


function draw() {

  background(255);

  Engine.update(engine);
  rectMode(CENTER);
  groundSprite.x = ground.position.x
  groundSprite.y = ground.position.y

  ww1.x = w1.position.x
  ww1.y = w1.position.y

  ww2.x = w2.position.x
  ww2.y = w2.position.y

  ww3.x = w3.position.x
  ww3.y = w3.position.y

 
 

 
ball1.display()
  ;
  drawSprites();
 
 
}

function keyPressed(){

if (keyCode === 32){

Matter.Body.applyForce(ball1.body,ball1.body.position,{x:22,y:-17});



}


}


