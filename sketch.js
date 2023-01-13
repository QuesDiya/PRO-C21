var ball;
var ground,leftbin,rightbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1600,700);

	

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.

	ball = Matter.Bodies.circle(200,600,20,ball_options);
	World.add(world,ball);
	Engine.run(engine);
	

	ground = new Ground(width/2,height-50,width,20);
	leftbin = new Ground(1100,580,20,120);
	rightbin = new Ground(1350,580,20,120);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ellipse(ball.position.x,ball.position.y,40,40);
	ground.display();
	leftbin.display();
	rightbin.display();

 
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}
