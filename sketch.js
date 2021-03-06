
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;
var constraint;
var mangoBodyPosition, stoneBodyPosition;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1200,120,30);
	mango3=new mango(1150,200,30);
	mango4=new mango(1000,150,30);

	treeObj=new tree(1050,580);
	stoneObj = new Stone(240,420,40);
	groundObject=new ground(width/2,600,width,20);
	constraint = new Line(stoneObj.body,{x:240,y:420})
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  stoneObj.display();
  constraint.display();

  groundObject.display();
  
  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x: mouseX , y: mouseY});
}

function mouseReleased(){
	constraint.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stoneObj.body,{x:240,y:420});
    constraint.attach(stoneObj.body);
  }
}
function detectcollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  console.log(distance);
  console.log(lmango.r+lstone.diameter);
  if (distance<=lmango.r+lstone.diameter){
    
    Matter.Body.setStatic(lmango.body, false);
  }
  
}
