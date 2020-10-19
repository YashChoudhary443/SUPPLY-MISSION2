var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var boxSide1,boxSide2,boxSide3;

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
	groundSprite.shapeColor=color(255)

	  
	  

	engine = Engine.create();
	world = engine.world;

	boxSide1=new Box(width/2,height-50,300,20);
	  
	  boxSide2=new Box(560,height-100,20,120);
	 
	  boxSide3=new Box(240,height-100,20,120);

	packageBody = Bodies.circle(width/2 , 200 , 25 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  
  packageBody.x=helicopterSprite.x;
  packageSprite.x=helicopterSprite.x;
  



if(keyDown("LEFT_ARROW")){
	helicopterSprite.x=helicopterSprite.x-5;
	
}

if(keyDown("RIGHT_ARROW")){
	helicopterSprite.x=helicopterSprite.x+5;
	
}





   keyPressed();
  drawSprites();
 
  boxSide1.display();
  boxSide2.display();
  boxSide3.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	

	Matter.Body.setStatic(packageBody, false);
    packageBody.restitution=0.1;
	 
	
    
  }
}







