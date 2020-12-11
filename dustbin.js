class dustbin{
	constructor(x,y){
		this.x=x;
		this.y=y;
		this.width= 200;
		this.height= 100;
		this.thickness=20;
		this.angle=0;
		this.bottombody = Bodies.rectangle(this.x,this.y, this.width, this.thickness,{isStatic:true});
		World.add(world,this.bottombody);
		this.leftwall = Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.thickness, this.height,{isStatic:true});
		Matter.Body.setAngle(this.leftwall, this.angle);
		World.add(world,this.leftwall);
		this.rightwall = Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true});
		Matter.Body.setAngle(this.rightwall,-1*this.angle);
		World.add(world,this.rightwall);
 
	}
	display(){
		var bottomPosition = this.bottombody.position;
		push() 
		translate(bottomPosition.x, bottomPosition.y); 
		rectMode(CENTER);
		angleMode(RADIANS);
		fill(255);
		stroke(255);
		rotate(this.angle);
		 rect(0,0,this.width,this.thickness); 
		 pop();

		 var leftposition = this.leftwall.position;
		 push()
		 translate(leftposition.x,leftposition.y);
		 rectMode(CENTER);
		 angleMode(RADIANS);
		 fill(255);
		 stroke(255);
		 rotate(this.angle);
		 rect(0,0,this.thickness,this.height);
		 pop();

		 var rightPosition = this.rightwall.position;
		 push()
		 translate(rightPosition.x,rightPosition.y);
		 rectMode(CENTER);
		 angleMode(RADIANS);
		 fill(255);
		 stroke(255);
		 rotate(this.angle);
		 rect(0,0,this.thickness,this.height);
		 pop();

	}
}
 