
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;





function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
    

	engine = Engine.create();
	world = engine.world;
   
	dustbin = new dustbin(1100,650);
    ground = new Ground(800,height,1600,30);
    paper = new Paper(200,450,40);
	Engine.run(engine);
  
}




function draw() {
  
  background(0);
  Engine.update(engine);
  ground.display();
  dustbin.display();
  paper.display();

  function keyPressed(){
	if (keyCode === SPACE){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	} 
}

}



