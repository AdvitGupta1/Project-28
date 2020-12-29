
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground,stone,tree,boy,boyimage,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,launcher;
var launchingForce=100;

function preload()
{
	boyimage=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy= createSprite(200,540,20,20);
	boy.addImage(boyimage);
    boy.scale=0.1;
	ground=new Ground(400,610,800,20);
	stone=new Stone(140,480,20);
	tree= new Tree(500,100,100,100);
	mango1=new Mango(500,240,20,20)
	mango2=new Mango(550,270,20,20);
	mango3=new Mango(510,330,20,20);
	mango4=new Mango(430,320,20,20);
	mango5=new Mango(580,360,20,20);
	mango6=new Mango(670,330,20,20);
	mango7=new Mango(600,300,20,20);
	mango8=new Mango(620,245,20,20);
	launcher=new Launcher(stone.body,{x:140,y:490});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(265);

Engine.update(engine);

  drawSprites();
  ground.display();
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  launcher.display();

}

function mouseDragged(){
	console.log("hello");
   Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	
}



