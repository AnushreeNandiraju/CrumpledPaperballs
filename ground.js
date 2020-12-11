class Ground{
    constructor(x,y,width,height){
     this.x=x;
     this.y=y;
     this.width=width;
     this.height=height;
     this.ground = Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true});
     World.add(world,this.ground);
    }
    display(){
        var groundPos = this.ground.position;
        push();
        translate(groundPos.x,groundPos.y);
        fill("green");
        stroke("green");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();


    }
}