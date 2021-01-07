var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bottom,side1,side2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("blue")

bottom=createSprite(400,650,200,20);
bottom.shapeColor=color("red")

side1=createSprite(300,610,20,100);
side1.shapeColor=color("red")

side2=createSprite(500,610,20,100);
side2.shapeColor=color("red")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	bottom = Bodies.rectangle(400, 650, 200, 20, {isStatic:true} );
	World.add(world, bottom);

	side1 = Bodies.rectangle(300,610,20,100, {isStatic:true} );
	World.add(world, side1);

	side2 = Bodies.rectangle(500,610,20,100, {isStatic:true} );
	World.add(world, side2);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	


	

	Engine.run(engine);
	
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
}
 


function keyPressed() {

 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
	}

    
  }

 // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.



