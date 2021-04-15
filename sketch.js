
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var groundObj,treeObj,stoneObj,launcherObj;
var boyImage,mangoImage,stoneImage,treeImage;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;

var launchingForce = 100;

function preload()
{

	boyImage = loadImage("boy.png");	
}

function setup() {
	createCanvas(1300, 600);

  engine = Engine.create();
	world = Engine.world;

	//Create the Bodies Here.

	groundObj = new Ground(width/2,600,width,20);
	stoneObj = new Stone(235,420,30);
	treeObj = new Tree(1050,580);
	launcherObj = new Launcher(stoneObj.body,{x:235,y:420})

	mango1 = new Mango (1100,100,30);
	mango2 = new Mango (1170,130,30);
	mango3 = new Mango (1010,140,30);
	mango4 = new Mango (1000,70,30);
	mango5 = new Mango (1100,70,30);
	mango6 = new Mango (1000,230,30);
	mango7 = new Mango (900,230,40);
	mango8 = new Mango (1140,150,40);
	mango9 = new Mango (1100,230,40);
	mango10 = new Mango (1200,200,40);
	mango11 = new Mango (1120,50,40);
	mango12 = new Mango (900,160,40);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
	
	Engine.run(engine);
  
}


function draw() {
  background(230);

  textSize(25);
  text("Press Space to get a second Chance to Play!!",50,50);
  image(boy,200,340,200,300);

  groundObj.display();
  treeObj.display();
  stoneObj.display();
  launcherObj.display();
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
  mango12.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  detectCollision(stoneObj,mango10);
  detectCollision(stoneObj,mango11);
  detectCollision(stoneObj,mango12);

  function mouseDragged(){
	  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
  }

  function mouseReleased(){
	  launcherObj.fly;
	  
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));

  }

  function keyPressed() {

	if (keyCode === 32) {
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) ;
		launcherObject.attach(stoneObj.body);

 }
}


function detectCollision(lstone,lmango){
		/*var collision = Matter.SAT.collides(lstone,lmango);
          	if(collision.collided){
			   console.log("collided");
			   Matter.Body.setStatic(lmango,false);	
			  }*/
						
  mangoBodyPosition=lmango.body.position  ;
  stoneBodyPosition=lstone.body.position  ;

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
 if(distance<=lmango.r+lstone.r)
 {
   //console.log(distance);
	 Matter.Body.setStatic(lmango.body,false);
 }
}


} 