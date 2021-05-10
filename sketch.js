const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

var tree;
var ground;
var boy;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload(){
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(700,700,1400,10);
	tree = new Tree(1400,200,70,70);
	mango1 = new Mango(250,100);
	mango2 = new Mango(100,200);
	mango3 = new Mango(300,250);
	mango4 = new Mango(475,250);
	mango5 = new Mango(170,250);
	mango6 = new Mango(275,180);
	mango7 = new Mango(375,100);
	mango8 = new Mango(500,150);
	mango9 = new Mango(405,200);
	mango10= new Mango(600,250);
	mango11= new Mango(350,45);
	boy = new Boy(900,300,30,50);
  stone = new Stone(935,415);
	rope = new Rope(stone.body,{x:935,y:400 });
	Engine.run(engine);
  
}


function draw() {

  Engine.update(engine);

  rectMode(CENTER);
  background("lightBlue");
  
  /*stone.body.position.x = mouseX;
  stone.body.position.y = mouseY;*/

  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  stone.display();
  boy.display();
  rope.display();
  ground.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);

  fill("black");
  textSize(20);
  text("Press space to get a second chance to play" ,500,50);
 
}

function mouseDragged(){

    Matter.Body.setPosition(stone.body , { x : mouseX , y : mouseY} );

}

function mouseReleased(){
 
  rope.fly();

}

function keyPressed(){

  if(keyCode === 32){
    Matter.Body.setPosition(stone.body, { x : 935 , y : 400});
    rope.attach(stone.body);
  }

}

function detectCollision(lstone,lmango){

	var mangoBodyPosition = lmango.body.position;
	var stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  
		if(distance <= lmango.width + lstone.width){
			 Matter.Body.setStatic(lmango.body,false);
       //Matter.Body.setStatic(lmango.body, {isStatic : false});
    }

}