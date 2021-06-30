
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roofObject = new Roof(width/2,height/4,width/7,20);

	bobDiameter = 20; 

	startBobPosX = width/2;
	startBobPosY = height/4+500;

	bob1 = new Bob(startBobPosX-bobDiameter*2,startBobPosY,bobDiameter);
	bob2 = new Bob(startBobPosX-bobDiameter, startBobPosY,bobDiameter);
	bob3 = new Bob(startBobPosX,startBobPosY,bobDiameter);
	bob4 = new Bob(startBobPosX+bobDiameter,startBobPosY,bobDiameter);
	bob5 = new Bob(startBobPosX+bobDiameter*2,startBobPosY,bobDiameter);

	rope1 = new Rope(bob1.body,roofObject.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roofObject.body,-bobDiameter,0)
	rope3 = new Rope(bob3.body,roofObject.body,0,0);
	rope4 = new Rope(bob4.body,roofObject.body,bobDiameter,0);
	rope5 = new Rope(bob5.body,roofObject.body,bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function KeyPressed()
{
	if(keyCode === UP_ARROW)
	{

		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-20,y:-45});

	}

}

