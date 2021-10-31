
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperImage, binImage

function preload() {

paperImage=loadImage("paper.png");
binImage=loadImage("bin.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(50, 100, 30);
	World.add(world, ball);
ground=Matter.Bodies.rectangle(0, 650, 2000, 20, {isStatic:true});
World.add(world,ground);
	Engine.run(engine);

}

function draw() {

	rectMode(CENTER);
	ellipseMode(RADIUS);
	imageMode(CENTER);
	background("white");
	image(paperImage, ball.position.x, ball.position.y, 30, 30);
	rect(ground.position.x, ground.position.y, 2000, 20)
image(binImage, 650, 550 );
	

}
function keyPressed(){

	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.8, y:-0.2})
	}

}


