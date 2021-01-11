
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	rock=new Stone(400,350,50,50)
	mango1=new Mangoes(200,250,50,50)
	plant=new Tree(400,200,50,50)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rock.display()
  drawSprites();
 
}



