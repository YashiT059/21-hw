

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}


var leftSide
var rightSide
var groundObj
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	restitution:0.3


}


ball= Bodies.circle(200,350,20,ball_options)
World.add (world, ball)
	Engine.run(engine);

groundObj = new Ground(width/2, 670, width, 20);
leftSide = new Ground (1100,600,20,120)
rightSide = new Ground (1300,600,20,120)

}


function draw() {
  rectMode(CENTER);
  background(0);
  
ellipse(ball.position.x, ball.position.y, 20)

groundObj.display();
rightSide.display();
leftSide.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, 1,0.5)
	}
}

